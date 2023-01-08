
const request = require('request');


const db = require('./server');

// Perform database operations here...




const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: 
  
  "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",
});
const openai = new OpenAIApi(configuration);





























const options = {
  method: 'POST',
  url: 'https://api.openai.com/v1/conversations',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    prompt: 'Hello, how are you today?'
  })
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
