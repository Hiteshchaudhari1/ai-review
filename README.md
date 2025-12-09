I want to provide an hardcoded implementation to the Plugin API - `ai-code-review.ts`

The problem I am facing is: Since the AiCodeReview API is not available in the standardize npm module, 
I cannot simply add a dependancy on "@plugins_npm//@gerritcodereview/typescript-api".

I have provided a small hardcoded impl. to `AiCodeReview API` in `ai-code-review-impl.ts`

I want to use the experimental feature of AI chat introduced by Ben Rohlf: https://gerrit-review.googlesource.com/c/gerrit/+/522821

Feature is behind toggle:
````
[experiments]
	enabled = UiFeature__enable_ai_chat

