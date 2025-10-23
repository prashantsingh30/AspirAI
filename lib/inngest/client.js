import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "aspirai",
  name: "Aspirai",
  credentials: {
    gemini: { apikey: process.env.GEMINI_API_KEY },
  },
});
