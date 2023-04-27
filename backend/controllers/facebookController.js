const chatGPTController = require('./chatGPTController');
const axios = require('axios');
const config = require('../config');

async function handleIncomingMessage(senderId, messageText) {
  const prompt = `User: ${messageText}\nChatbot: `;
  const response = await chatGPTController.sendQueryToChatGPT(prompt);
  if (response) {
    console.log(`Response to message: ${response}`);
    await sendTextMessage(senderId, response);
  } else {
    console.log('No response from ChatGPT.');
  }
}

async function sendTextMessage(senderId, messageText) {
  const url = `https://graph.facebook.com/v13.0/me/messages?access_token=${config.pageAccessToken}`;
  try {
    await axios.post(url, {
      recipient: { id: senderId },
      message: { text: messageText },
    });
  } catch (error) {
    console.error('Error sending message:', error.message);
    console.error('Error response data:', error.response.data);
  }
}

async function replyToComment(postId, commentId, messageText) {
  const url = `https://graph.facebook.com/v13.0/${commentId}/comments?access_token=${config.pageAccessToken}`;
  try {
    await axios.post(url, {
      message: messageText,
    });
  } catch (error) {
    console.error('Error replying to comment:', error.message);
  }
}

// Webhook de vérification
async function verifyWebhook(req, res) {
  if (req.query['hub.verify_token'] === config.verifyToken) {
    res.send(req.query['hub.challenge']);
  } else {
    res.sendStatus(403);
  }
}

// Webhook pour les événements entrants
async function handleWebhook(req, res) {
  const data = req.body;

  if (data.object === 'page') {
    data.entry.forEach(async (entry) => {
      const messaging = entry.messaging || entry.changes;
      for (const event of messaging) {
        if (event.message && event.message.text) {
          const senderId = event.sender.id;
          const messageText = event.message.text;
          await handleIncomingMessage(senderId, messageText);
        } else if (event.field === 'feed') {
          const comment = event.value.comment_id;
          const postId = event.value.post_id;
          const senderId = event.value.from.id;
          const messageText = event.value.message;

          if (event.value.item === 'comment' && event.value.verb === 'add') {
            const responseText = await chatGPTController.sendQueryToChatGPT(messageText);
            console.log(`Response to comment: ${responseText}`);
            await replyToComment(postId, comment, responseText);
          }
        }
      }
    });

    res.sendStatus(200);
  }
}

module.exports = {
  verifyWebhook,
  handleWebhook,
};
