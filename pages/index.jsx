import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import NavBar from "../components/NavBar";

export default function HomePage() {
  const [nations, setNations] = useState([]);

  useEffect(() => {
    axios.get("/api/nations").then((res) => setNations(res.data));
  }, []);

  return (
    <>
      <NavBar />
      <main className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-red-500 mb-4">Select a Nation</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {nations.map((nation) => (
            <Link
              key={nation.id}
              href={`/nation/${nation.id}/1936`}
              className="block bg-gray-800 text-white p-4 rounded shadow hover:bg-red-600 transition"
            >
              <h3 className="text-lg font-bold">{nation.name}</h3>
              <p className="text-sm text-gray-300">{nation.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
