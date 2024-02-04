import OpenAI from "openai";

export function getOpenAIClient() {
  const openai = new OpenAI({
    baseURL: "http://api.yycdev.com/v1",
    apiKey: process.env.OPENAI_API_KEY,
  });

  return openai;
}
