import { Configuration } from "openai";

export const configureOpenAI = () => {

  console.log(process.env.OPEN_AI_SECRET)
  console.log(process.env.OPENAI_ORGANIZATION_ID)
  const config = new Configuration({
    apiKey: process.env.OPEN_AI_SECRET,
    organization: process.env.OPENAI_ORGANIZATION_ID,
  });
  return config;
};