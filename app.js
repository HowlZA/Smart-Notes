// Load notes from notes.md
fetch('notes.md')
  .then(response => response.text())
  .then(data => {
    document.getElementById('notes-content').innerHTML = marked.parse(data);
  });

// Chat functionality
const toggleButton = document.getElementById("toggle-chat");
const chatbox = document.getElementById("chatbox");
const minimizeButton = document.getElementById("minimize-chat");
const sendButton = document.getElementById("send-button");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

toggleButton.onclick = () => {
  chatbox.classList.remove("hidden");
};

minimizeButton.onclick = () => {
  chatbox.classList.add("hidden");
};

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

function displayMessage(message, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(sender);
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
