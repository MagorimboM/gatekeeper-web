import axios from 'axios'; 

const api = axios.create({
  baseURL: 'https://monarch-domain/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

// Sends a message with text and file to the chatbot API
async function sendMessageWithFile({ text, file }: { text?: string; file?: File }) {
  const response = await api.post('/bot', { text, file });
  // TODO: update chat history with response (global state)
  return response;
}; 

// Retrieves the chat history from the chatbot API
async function fetchChatHistory() {
  const chatHistoty = await api.get('/bot');
  // TODO: update chat history with response (global state)
  return chatHistoty;
}; 

export {fetchChatHistory, sendMessageWithFile}; 
