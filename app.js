// Load markdown notes
fetch('notes.md')
  .then(response => response.text())
  .then(data => {
    document.getElementById('notes-content').innerHTML = marked.parse(data);
  });

// Elements
const toggleButton = document.getElementById("toggle-chat");
const chatbox = document.getElementById("chatbox");
const minimizeButton = document.getElementById("minimize-chat");
const fullscreenButton = document.getElementById("fullscreen-chat");
const sendButton = document.getElementById("send-button");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

// Show chat
toggleButton.onclick = () => {
  chatbox.classList.remove("hidden");
};

// Minimize chat
minimizeButton.onclick = () => {
  chatbox.classList.add("hidden");
};

// Toggle fullscreen
fullscreenButton.onclick = () => {
  chatbox.classList.toggle("fullscreen");
};

// Send message
sendButton.onclick = () => {
  const message = userInput.value.trim();
  if (message) {
    displayMessage(message, "user");
    userInput.value = "";
    setTimeout(() => {
      displayMessage("AI is thinking... (This would be the real AI response.)", "ai");
    }, 1000);
  }
};

// Display chat messages
function displayMessage(text, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.className = sender;
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
