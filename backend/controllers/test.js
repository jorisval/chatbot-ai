const chatGPTController = require('./chatGPTController');

async function testMessage(req, res) {
  const prompt = `User: ${req.body.message}\nChatbot: `;
  await chatGPTController.sendQueryToChatGPT(prompt)
  .then((response) => res.status(201).json({ response }))
  .catch(error => res.status(400).json({ error }))
}

module.exports = {
  testMessage,
};
