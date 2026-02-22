import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
app.use(express.json());

// ✅ CORS: metti il tuo dominio frontend Railway
app.use(cors({
  origin: [
    "https://serramenti-frontend-production.up.railway.app",
  ],
}));

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/analyze", async (req, res) => {
  try {
    const { imageUrl } = req.body;
    if (!imageUrl) return res.status(400).json({ error: "Missing imageUrl" });

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

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

    res.json({ output: result.response.text() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Railway: usa PORT dinamico
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));
