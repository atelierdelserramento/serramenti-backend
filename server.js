import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/analyze", async (req, res) => {
  try {
    const { imageUrl } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro"
    });

    const prompt = `
Analizza questa immagine di serramento.
Restituisci:
- categoria
- materiale
- stato (aperta/chiusa)
- tipo apertura
- descrizione breve professionale
`;

    const result = await model.generateContent([
      prompt,
      {
        fileData: {
          fileUri: imageUrl,
          mimeType: "image/png"
        }
      }
    ]);

    const response = await result.response;
    res.json({ output: response.text() });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
