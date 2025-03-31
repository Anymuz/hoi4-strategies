export function parseNationData(rawJson) {
    const result = { ...rawJson, years: {} };
  
    for (const [year, yearData] of Object.entries(rawJson.years || {})) {
      result.years[year] = {
        ...yearData,
        sections: (yearData.sections || []).map(parseSection)
      };
    }
  
    return result;
  }
  
  function parseSection(section) {
    return {
      ...section,
      actions: (section.actions || []).map(parseAction)
    };
  }
  
  function parseAction(action) {
    if (typeof action === "string") return { type: "text", content: action };
    if (action.commander) return { type: "commander", ...action };
    if (action.war) return { type: "war", ...action };
    if (action.type && action.modules) return { type: "template", ...action };
    return { type: "unknown", raw: action };
  } 