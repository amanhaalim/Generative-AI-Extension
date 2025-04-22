// popup.js

document.addEventListener('DOMContentLoaded', function () {
  const sendButton = document.getElementById('sendQuery');
  const queryInput = document.getElementById('queryInput');
  const chatHistory = document.getElementById('chatHistory');

  function sendMessage() {
    const query = queryInput.value.trim();
    if (query === '') return;

    addMessage('You', query);
    queryInput.value = '';

    chrome.runtime.sendMessage({ message: "query", query: query }, function (response) {
      console.log('Response from background:', response);
      addMessage('Bot', response.response || response.error);
    });
  }

  function addMessage(user, text) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message';
    messageElement.innerHTML = `<span class="user">${user}:</span> <span class="response">${text}</span>`;
    chatHistory.appendChild(messageElement);
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }

  sendButton.addEventListener('click', sendMessage);

  queryInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  });
});
