const chatGPTController = require('./chatGPTController');

async function testMessage(req, res) {
  const inputText = req.body.message;
  console.log("Input prompt:", inputText);
  await chatGPTController.sendQueryToChatGPT(inputText)
  .then((response) => {
    if (!response) {
      console.log('No response from ChatGPT.');
    }
    res.status(200).json( response )
  })
  .catch((err) => res.console);
}

module.exports = {
  testMessage,
};
