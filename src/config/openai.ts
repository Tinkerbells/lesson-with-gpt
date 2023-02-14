import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_API_KEY,
});

export const openaiClient = new OpenAIApi(configuration);
