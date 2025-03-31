import { useState } from "react";

export default function SectionBlock({ section }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="bg-gray-800 p-4 mb-4 rounded shadow text-white">
      <button
        className="text-left w-full text-xl font-bold text-red-400 flex justify-between items-center"
        onClick={() => setExpanded(!expanded)}
      >
        {section.title}
        <span className="text-sm text-white">{expanded ? "–" : "+"}</span>
      </button>

      {expanded && (
        <div className="mt-4 space-y-4">
          {/* ACTIONS */}
          {Array.isArray(section.actions) && section.actions.length > 0 && (
            <div>
              <ul className="list-disc ml-6 space-y-1 text-gray-300">
                {section.actions.map((action, i) => (
                  <li key={i}>{renderTypedAction(action)}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function renderTypedAction(action) {
  if (typeof action === "string") {
    return action;
  }

  switch (action.type) {
    case "text":
      return action.content;

    case "commander":
      return (
        <>
          <strong>{action.commander}</strong>
          <ul className="ml-4 list-disc text-gray-400">
            {action.assignments.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </>
      );

    case "war":
      return (
        <>
          <strong>War:</strong> {action.war} ({action.side})
          <ul className="ml-4 list-disc text-gray-400">
            {(action.deployment || []).map((d, i) => (
              <li key={i}>{d}</li>
            ))}
            {(action.objectives || []).map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </>
      );

    case "template":
      return (
        <>
          <strong>{action.type}</strong>
          <ul className="ml-4 list-disc text-gray-400">
            {action.modules.map((mod, i) => (
              <li key={i}>{mod}</li>
            ))}
          </ul>
        </>
      );

    default:
      return (
        <pre className="text-sm text-gray-500 bg-gray-900 rounded p-2 overflow-auto">
          {JSON.stringify(action, null, 2)}
        </pre>
      );
  }
}
