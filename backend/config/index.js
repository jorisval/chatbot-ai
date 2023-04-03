require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  chatGPTAPIKey: process.env.CHATGPT_API_KEY,
  pageAccessToken: process.env.PAGE_ACCESS_TOKEN,
  verifyToken: process.env.VERIFY_TOKEN,
};
