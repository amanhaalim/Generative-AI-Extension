# app.py

import os
import warnings
from flask import Flask, request, jsonify

import openai
from langchain.chains import ConversationalRetrievalChain
from langchain_openai import ChatOpenAI
from langchain_community.document_loaders import DirectoryLoader
from langchain_openai import OpenAIEmbeddings
from langchain.indexes import VectorstoreIndexCreator
from langchain_community.vectorstores import Chroma

import constants

app = Flask(__name__)

os.environ["OPENAI_API_KEY"] = constants.APIKEY

PERSIST = False

def load_ai_model():
    if PERSIST and os.path.exists("persist"):
        vectorstore = Chroma(persist_directory="persist", embedding_function=OpenAIEmbeddings())
        index = VectorstoreIndexCreator(embedding=OpenAIEmbeddings(), vectorstore=vectorstore).from_vectorstore(vectorstore)
    else:
        loader = DirectoryLoader("backend/data")  # Correct path to your data directory
        if PERSIST:
            vectorstore = Chroma(persist_directory="persist", embedding_function=OpenAIEmbeddings())
            index = VectorstoreIndexCreator(embedding=OpenAIEmbeddings(), vectorstore=vectorstore).from_loaders([loader])
        else:
            index = VectorstoreIndexCreator(embedding=OpenAIEmbeddings()).from_loaders([loader])

    chain = ConversationalRetrievalChain.from_llm(
        llm=ChatOpenAI(model="gpt-3.5-turbo"),
        retriever=index.vectorstore.as_retriever(search_kwargs={"k": 1}),
    )
    return chain

chain = load_ai_model()

@app.route('/query', methods=['POST'])
def handle_query():
    query = request.json['query']
    chat_history = request.json.get('chat_history', [])
    result = chain({"question": query, "chat_history": chat_history})
    response = result['answer']
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
