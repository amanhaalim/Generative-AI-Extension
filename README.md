🤖 BOT DETECTION & CHATBOT EXTENSION 
A fun and powerful tool to find out if an online account is a bot or a human – and talk to your documents like you're chatting with a friend!

💡 What is This?
This is a simple web app that helps you:

Detect if a social media account is a bot.

Talk to your uploaded files using an AI chatbot (kind of like talking to ChatGPT but only about your documents).

🚀 What Does It Do?
You fill out a form with details about a social media account.

It guesses if that account is real or a bot, using AI.

You can also upload text files or PDFs, and the chatbot will answer questions based on those documents.

There’s a browser extension that can send questions to the chatbot too!

📦 What's Inside?
💻 Frontend (What You See)
React app (in frontend/) that shows the form and results on the website.

Main file: App.js — this shows the form, results, and predictions.

🧠 Backend (The Brain)
Flask server (in backend/) that uses AI and machine learning.

Main file: app.py — it reads your files and gives smart answers.

It also handles predictions (e.g., “Is this account a bot?”).

🧩 Browser Extension (Optional Bonus)
File: background.js — this lets you use the chatbot while browsing!

🛠️ How to Set It Up (Step-by-Step)
✅ 1. Setup the Backend
Open Terminal or Command Prompt.

Type:

bash
Copy
Edit
cd backend
Create a virtual environment:

bash
Copy
Edit
python -m venv venv
Activate it:

Windows:

bash
Copy
Edit
venv\Scripts\activate
Mac/Linux:

bash
Copy
Edit
source venv/bin/activate
Install the tools:

bash
Copy
Edit
pip install flask pandas numpy scikit-learn joblib flask-cors openai langchain chromadb
Add your OpenAI API key to constants.py like this:

python
Copy
Edit
APIKEY = "your-openai-api-key"
Start the server:

bash
Copy
Edit
python app.py
✅ 2. Setup the Frontend
Open another terminal window.

Type:

bash
Copy
Edit
cd frontend
Install frontend tools:

bash
Copy
Edit
npm install
Start the app:

bash
Copy
Edit
npm start
Visit http://localhost:3000 in your browser.

✅ 3. Setup the Extension (Optional)
Go to chrome://extensions in your Chrome browser.

Turn on Developer Mode (top-right).

Click Load Unpacked.

Select the folder where background.js is located.

Now the extension can send questions to your Flask chatbot!

🧪 How to Use
👤 Bot Detector
Fill in the account info (like followers, tweets).

Click “Detect Bot”.

See results and how confident the AI is.

💬 Chat with Your Files
Upload documents in backend/data/.

Ask questions using the browser extension or any tool connected to the /query endpoint.

📁 Important Files & What They Do

File	What It Does
app.py	Main backend logic — runs chatbot and handles questions
background.js	Lets browser extension talk to the chatbot
App.js	The React UI you interact with
App.css	Makes the UI look clean and pretty
index.js	Starts the React app
package.json	Lists all tools needed for frontend
🎁 Cool Things to Add (Bonus Ideas)
Use more training data to improve detection.

Make the chatbot speak or give fun responses.

Turn it into a mobile app!

🧠 Final Thought
This project is like your own little robot detective mixed with an AI helper. You’re not just building apps — you’re building smart tools that think, talk, and help. Keep experimenting and make it your own! 🛠️✨
