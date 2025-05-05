const sendButton = document.getElementById("send-button");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat");

sendButton.addEventListener("click", function() {
    const message = userInput.value.trim();
    if (message) {
        displayMessage(message, "user");
        userInput.value = "";
        // Call your AI model or server here to get a response
        setTimeout(() => displayMessage("AI is thinking... (In a real app, this would be the AI response.)", "ai"), 1000);
    }
});

function displayMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(sender);
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
