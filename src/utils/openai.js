import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const openai = new OpenAI({
  organization: "org-8phr5w5dlvaICtZk0Qr2uW0d",
  // apiKey: process.env[OPENAI_KEY], // This is the default and can be omitted
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
