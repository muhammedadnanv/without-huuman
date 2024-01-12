// ai-prompting-lib.js

const axios = require('axios');

class AIPromptingLib {
  constructor(apiKey, apiUrl) {
    this.apiKey = apiKey;
    this.apiUrl = apiUrl;
  }

  async generatePrompt(prompt, options = {}) {
    try {
      const response = await axios.post(
        `${this.apiUrl}/generate`,
        {
          prompt,
          ...options,
        },
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data.generated_text;
    } catch (error) {
      throw new Error(`Error generating prompt: ${error.message}`);
    }
  }

  // Add more methods for handling different functionalities,
  // such as training the model, retrieving model information, etc.
}

module.exports = AIPromptingLib;
