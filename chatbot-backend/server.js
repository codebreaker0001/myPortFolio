const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const fs = require("fs");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const TOGETHER_API_KEY = process.env.TOGETHER_API_KEY;

// 📝 Load plain-text resume
let resumeText = "";

try {
  resumeText = fs.readFileSync("./resume.txt", "utf-8");
  console.log("✅ Resume loaded from resume.txt");
} catch (err) {
  console.error("❌ Error reading resume.txt:", err.message);
}

const queryTogether = async (message) => {
  try {
    const response = await axios.post(
      "https://api.together.xyz/inference",
      {
        model: "meta-llama/Llama-2-13b-chat-hf", 
        prompt: `You are a resume assistant. Use the following resume to answer:\n\n${resumeText}\n\nQuestion: ${message}\n\nAnswer:`,
        max_tokens: 3000,
        temperature: 0.7,
        top_p: 0.9,
        repetition_penalty: 1.1,
      },
      {
        headers: {
          Authorization: `Bearer ${TOGETHER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const output = response.data.output;
    console.log(output);
    
    if (typeof output === "string") {
      return output; // No .trim()
    } else if (typeof output === "object") {
      const text = output.choices?.[0]?.text || JSON.stringify(output);
      return text;
    } else {
      return "⚠️ Unexpected response format from Together AI.";
    }
  } catch (error) {
    console.error("🔴 Together.ai API error:", error.response?.data || error.message);
    return "🚨 Error contacting Together AI.";
  }
};

// console.log(resumeText);


// 📨 Chat endpoint
app.post("/chat", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required." });

  const reply = await queryTogether(message);
  console.log(reply);
  console.log(reply.length);
  

  
  res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
