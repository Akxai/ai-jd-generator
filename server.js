import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.VITE_OPENAI_API_KEY });

app.post("/generate", async (req, res) => {
  const { role, experience, skills, companyType } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content: `Generate a job description for a ${role} with ${experience} experience, skills: ${skills}, company type: ${companyType}. Include interview questions.`,
        },
      ],
      max_tokens: 400,
    });

    res.json({ result: completion.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate" });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
