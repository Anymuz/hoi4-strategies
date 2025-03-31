import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import SectionBlock from "../components/SectionBlock";
import { parseNationData } from "../utils/parseNationData";
import NavBar from "../components/NavBar";

export default function NationPage() {
  const router = useRouter();
  const nationId = router.query.nationId || "japan";
  const year = router.query.year || "1936";

  const [nation, setNation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!nationId) return;
    axios
      .get(`/api/nation`, { params: { nationId } })
      .then((res) => {
        const parsed = parseNationData(res.data);
        setNation(parsed);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load nation strategy.");
      });
  }, [nationId]);

  if (error) return <div className="p-6 text-red-500">{error}</div>;
  if (!nation) return <div className="p-6 text-gray-300">Loading...</div>;

  const yearData = nation.years?.[year];
  if (!yearData) return <div className="p-6 text-yellow-400">No data for {year}</div>;

  return (
    <>
      <NavBar />
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-red-500 text-center mb-6">
          {nation.title} – {year}
        </h1>
        {yearData.sections.map((section, i) => (
          <SectionBlock key={i} section={section} />
        ))}
      </div>
    </>
  );
}
