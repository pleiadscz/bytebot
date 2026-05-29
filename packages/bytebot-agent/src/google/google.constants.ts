import { BytebotAgentModel } from '../agent/agent.types';

export const GOOGLE_MODELS: BytebotAgentModel[] = [
  {
    provider: 'google',
    name: 'gemini-3.1-flash-lite',
    title: 'Gemini 3.1 Flash Lite',
    contextWindow: 1000000,
  },
  {
    provider: 'google',
    name: 'gemma-4-31b-it',
    title: 'Gemma 4',
    contextWindow: 1000000,
  },
];

export const DEFAULT_MODEL = GOOGLE_MODELS[0];
