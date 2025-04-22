// background.js

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('Received message in background:', request);  // Debug log
  if (request.message === "query") {
    const query = request.query;
    console.log('Sending query to Flask backend:', query);  // Debug log
    // Example request to your Flask backend
    fetch('http://127.0.0.1:5000/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: query })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Response from Flask backend:', data);  // Debug log
      sendResponse({response: data.response});
    })
    .catch(error => {
      console.error('Error:', error);  // Debug log
      sendResponse({error: error.message});
    });
    return true;  // Keep the message channel open for sendResponse
  }
});
