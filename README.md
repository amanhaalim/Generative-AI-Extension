# 🧠 ChatDocAI – Chat with Your Files in the Browser

This project enables users to query their local documents through a browser extension that communicates with a powerful AI backend using OpenAI's GPT models and LangChain.

---

## 📦 Project Overview

This system is made of two main parts:

1. **🔙 Flask Backend** (Python)
   - Loads and embeds local documents
   - Uses OpenAI + LangChain to generate responses
   - Answers user questions via an API endpoint

2. **🧩 Browser Extension (background.js)**
   - Listens for messages (user queries)
   - Sends questions to the Flask server
   - Receives and displays AI-generated answers

---

## 🛠️ Technologies Used

| Area | Tech |
|------|------|
| Backend | Python, Flask, LangChain, OpenAI API, ChromaDB |
| Frontend | JavaScript (Chrome Extension) |
| AI/ML | GPT-3.5-Turbo via LangChain |

---

## 📁 Folder Structure

project-root/ │ ├── backend/ │ 
├── app.py # Flask API + LangChain logic │ 
├── constants.py # Stores your OpenAI API key (not included here) │ └── data/ # Folder containing documents to be embedded │ 
├── extension/ │ ├── background.js # Chrome extension backend script │ 
├── manifest.json # (not uploaded, required to run extension) │ └── README.md # This file

yaml
Copy
Edit

---

## 🚀 How It Works

1. You place files in the `backend/data/` folder (PDF, TXT, etc.).
2. Flask reads them using LangChain and creates smart indexes.
3. The Chrome Extension sends your questions to Flask.
4. Flask returns an answer using OpenAI’s GPT model.
5. The Extension shows the answer to the user.

---

## 📦 Backend Setup (Flask + LangChain)

### 1. Clone the Repository & Setup Environment
```bash
cd backend
python -m venv venv
source venv/bin/activate   # On Windows use: venv\Scripts\activate
2. Install Requirements
bash
Copy
Edit
pip install flask openai langchain chromadb langchain-openai langchain-community
3. Create constants.py
In the backend/ folder, create a file named constants.py with:

python
Copy
Edit
APIKEY = "your-openai-api-key-here"
4. Add Documents
Place your .txt, .md, or .pdf files in the folder:

bash
Copy
Edit
backend/data/
5. Run the Flask App
bash
Copy
Edit
python app.py
Server will start at http://127.0.0.1:5000

🧩 Chrome Extension Setup
1. Create manifest.json (If not created)
json
Copy
Edit
{
  "manifest_version": 3,
  "name": "ChatDocAI Extension",
  "version": "1.0",
  "permissions": ["activeTab", "scripting"],
  "background": {
    "service_worker": "background.js"
  },
  "action": {
    "default_popup": "popup.html"
  }
}
Add popup.html and frontend if needed.

2. Load the Extension
Open Chrome and go to chrome://extensions/

Enable Developer Mode

Click "Load Unpacked"

Select the folder with your background.js and manifest.json

🔄 Communication Flow
csharp
Copy
Edit
[User Input in Browser]
        ⬇
[background.js → sends request]
        ⬇
[Flask Server @ localhost:5000/query]
        ⬇
[LangChain + GPT generate response]
        ⬇
[Response sent back to extension]
        ⬇
[Displayed in browser popup]
🧪 Example API Query (Manual)
You can test the backend with this curl command:

bash
Copy
Edit
curl -X POST http://127.0.0.1:5000/query \
     -H "Content-Type: application/json" \
     -d '{"query": "What is this document about?"}'
🧯 Troubleshooting
❌ CORS errors? Add flask-cors:

bash
Copy
Edit
pip install flask-cors
And add in app.py:

python
Copy
Edit
from flask_cors import CORS
CORS(app)
