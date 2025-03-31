import NavBar from "../components/NavBar";

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main className="max-w-3xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-red-500 mb-4">About</h2>
        <p className="text-gray-300">
          This HOI4 War Strategy Guide is powered by React + Next.js + Tailwind. Strategies are loaded dynamically per nation and year using structured JSON.
        </p>
      </main>
    </>
  );
}
