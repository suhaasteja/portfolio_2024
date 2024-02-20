import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";

Kommunicate.init("171b0a7e8b34870c2310c049ded3b0efe", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
