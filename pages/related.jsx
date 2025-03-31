import NavBar from "../components/NavBar";

export default function RelatedPage() {
  return (
    <>
      <NavBar />
      <main className="max-w-3xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-red-500 mb-4">Related Tools & Resources</h2>
        <ul className="list-disc ml-6 text-gray-300">
          <li><a href="https://hoi4.paradoxwikis.com" className="text-red-400 hover:underline">HOI4 Official Wiki</a></li>
          <li><a href="https://steamcommunity.com/app/394360/guides/" className="text-red-400 hover:underline">Steam Workshop Guides</a></li>
          <li><a href="https://www.reddit.com/r/hoi4/" className="text-red-400 hover:underline">Reddit /r/HOI4</a></li>
        </ul>
      </main>
    </>
  );
}
