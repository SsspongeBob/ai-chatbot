// Curated list of top models from Vercel AI Gateway
export const DEFAULT_CHAT_MODEL = "google/gemini-2.5-flash-lite";

export type ChatModel = {
  id: string;
  name: string;
  provider: string;
  description: string;
};

export const chatModels: ChatModel[] = [
  // xAI
  {
    id: "xai/grok-code-fast-1",
    name: "Grok Code Fast 1",
    provider: "xai",
    description: "Optimized for code generation",
  },
  {
    id: "xai/grok-4.1-fast-non-reasoning",
    name: "Grok 4.1 Fast",
    provider: "xai",
    description: "Fast inference without reasoning",
  },
  // Anthropic
  {
    id: "anthropic/claude-sonnet-4.5",
    name: "Claude Sonnet 4.5",
    provider: "anthropic",
    description: "Best balance of speed, intelligence, and cost",
  },
  {
    id: "anthropic/claude-haiku-4.5",
    name: "Claude Haiku 4.5",
    provider: "anthropic",
    description: "Fast and efficient",
  },
  {
    id: "anthropic/claude-opus-4.5",
    name: "Claude Opus 4.5",
    provider: "anthropic",
    description: "Most capable model",
  },
  // Google
  {
    id: "google/gemini-3-flash",
    name: "Gemini 3 Flash",
    provider: "google",
    description: "Ultra fast responses",
  },
  {
    id: "google/gemini-2.5-flash-lite",
    name: "Gemini 2.5 Flash Lite",
    provider: "google",
    description: "Ultra fast and affordable",
  },
  {
    id: "google/gemini-2.5-flash",
    name: "Gemini 2.5 Flash",
    provider: "google",
    description: "Fast and versatile",
  },
  {
    id: "google/gemini-3-pro-preview",
    name: "Gemini 3 Pro Preview",
    provider: "google",
    description: "Next generation model preview",
  },
  {
    id: "google/gemini-2.5-pro",
    name: "Gemini 2.5 Pro",
    provider: "google",
    description: "Most capable Gemini model",
  },
  // OpenAI
  {
    id: "openai/gpt-5.2",
    name: "GPT-5.2",
    provider: "openai",
    description: "Latest GPT model",
  },
  {
    id: "openai/gpt-5",
    name: "GPT-5",
    provider: "openai",
    description: "Advanced reasoning and generation",
  },
  {
    id: "openai/gpt-5-mini",
    name: "GPT-5 Mini",
    provider: "openai",
    description: "Efficient and cost-effective",
  },
  {
    id: "openai/gpt-4.1-mini",
    name: "GPT-4.1 Mini",
    provider: "openai",
    description: "Fast and cost-effective for simple tasks",
  },
  // DeepSeek
  {
    id: "deepseek/deepseek-v3.2",
    name: "DeepSeek V3.2",
    provider: "deepseek",
    description: "Latest DeepSeek model",
  },
  // Reasoning models
  {
    id: "xai/grok-4.1-fast-reasoning",
    name: "Grok 4.1 Fast Reasoning",
    provider: "reasoning",
    description: "Fast with reasoning capabilities",
  },
  {
    id: "xai/grok-4-fast-reasoning",
    name: "Grok 4 Fast Reasoning",
    provider: "reasoning",
    description: "Advanced reasoning model",
  },
  {
    id: "anthropic/claude-3.7-sonnet",
    name: "Claude 3.7 Sonnet",
    provider: "reasoning",
    description: "Extended thinking for complex problems",
  },
  {
    id: "openai/gpt-5.1-thinking",
    name: "GPT-5.1 Thinking",
    provider: "reasoning",
    description: "Advanced reasoning capabilities",
  },
  {
    id: "deepseek/deepseek-v3.2-thinking",
    name: "DeepSeek V3.2 Thinking",
    provider: "reasoning",
    description: "DeepSeek with reasoning",
  },
];

// Group models by provider for UI
export const modelsByProvider = chatModels.reduce(
  (acc, model) => {
    if (!acc[model.provider]) {
      acc[model.provider] = [];
    }
    acc[model.provider].push(model);
    return acc;
  },
  {} as Record<string, ChatModel[]>
);
