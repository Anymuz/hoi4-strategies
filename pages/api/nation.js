import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { nationId } = req.query;
  const filePath = path.join(process.cwd(), "data", `${nationId}.json`);

  try {
    const fileData = fs.readFileSync(filePath, "utf-8");
    const json = JSON.parse(fileData);
    res.status(200).json(json);
  } catch (err) {
    res.status(404).json({ error: "Nation file not found." });
  }
}
