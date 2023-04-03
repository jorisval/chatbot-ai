const axios = require('axios');
const config = require('../config');

const chatGPTAPIEndpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';

async function sendQueryToChatGPT(prompt) {
  try {
    const response = await axios.post(
      chatGPTAPIEndpoint,
      {
        prompt: prompt,
        max_tokens: 150,
        n: 1,
        stop: null,
        temperature: 0.8,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.chatGPTAPIKey}`
        }
      }
    );

    const answer = response.data.choices[0].text.trim();
    return answer;
  } catch (error) {
    console.error('Error querying ChatGPT:', error.message);
    return null;
  }
}

module.exports = {
  sendQueryToChatGPT,
};
