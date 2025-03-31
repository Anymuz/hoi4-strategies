import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "data", `nations.json`);

  try {
    const fileData = fs.readFileSync(filePath, "utf-8");
    const json = JSON.parse(fileData);
    res.status(200).json(json);
  } catch (err) {
    res.status(404).json({ error: "Nation list not found." });
  }
}
