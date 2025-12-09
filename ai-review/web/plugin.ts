import '@gerritcodereview/typescript-api/gerrit';

import './ai-code-review-impl';

import {HardcodedAiCodeReviewProvider} from "./ai-code-review-impl";

// 1. Define the interface for the AI service if you haven't already
interface AiCodeReviewApi {
  register(provider: HardcodedAiCodeReviewProvider): void;
}

declare module '@gerritcodereview/typescript-api/plugin' {
  interface PluginApi {
    aiCodeReview(): AiCodeReviewApi;
  }
}

window.Gerrit?.install(plugin => {
  plugin.aiCodeReview().register(new HardcodedAiCodeReviewProvider());
  console.log('SAP AI provider registered');
});

