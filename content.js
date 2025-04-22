// content.js

// Function to send a message to the background script
function sendMessageToBackground(data) {
    chrome.runtime.sendMessage(data, function(response) {
      console.log('Response from background:', response);
    });
  }
  
  // Example usage: send a message to the background script when the page loads
  window.onload = function() {
    sendMessageToBackground({message: "Page loaded"});
  };
  