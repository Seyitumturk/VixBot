const request = require('request');

const apiKey = "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";

function sendMessage(prompt) {
  const options = {
    method: 'POST',
    url: 'https://api.openai.com/v1/conversations',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + apiKey
    },
    body: JSON.stringify({
      prompt: prompt
    })
}
}