import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});

export const openaiClient = new OpenAIApi(configuration);
