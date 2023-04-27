const { Configuration, OpenAIApi } = require("openai");
const config = require('../config');
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function sendQueryToChatGPT(inputText) {
  const businessInfo = JSON.stringify(config.businessInfo);
  const noProfanityInstruction = 'Avoid using profanity in the response.';
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "assistant",
          content: `You are Virtual Assistant of ${config.businessInfo.name}. You are here to help answer questions and provide assistance.`
        },
        {
          role: "assistant",
          content: `Here is the business information: ${businessInfo}`
        },
        {
          role: "assistant",
          content: noProfanityInstruction
        },
        {
          role: "user",
          content: inputText
        }
      ],
  });
  const answer = completion.data.choices[0].message.content;
  return answer;
  } catch (error) {
    console.error('Error querying ChatGPT:', error.response.data.error.message);
    return null;
  }
}

module.exports = {
  sendQueryToChatGPT,
};
