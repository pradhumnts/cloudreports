<template>
  <div>
    <div
      id="chat-icon"
      class="fixed bottom-0 right-0 m-5 flex items-center justify-center text-white rounded-full w-14 h-14 cursor-pointer animate__animated animate__zoomIn"
      @click="toggleChat"
    >
      <span class="material-icons-outlined">chat</span>
    </div>
    <div
      id="chat-window"
      :class="['fixed', 'bottom-0', 'right-0', 'mr-5', 'mb-3', 'bg-white', 'border', 'shadow-2xl', 'rounded-xl', 'transition-opacity', isVisible ? 'visible' : 'invisible', isVisible ? 'opacity-100' : 'opacity-0']"
    >
      <div
        class="p-3 bg-white close-button rounded-full absolute -top-6 shadow-2xl -right-6 m-2 cursor-pointer w-7 h-7 flex justify-center items-center"
      >
        <button id="close-chat" class="text-3xl material-icons-outlined border rounded-full shadow p-1" @click="toggleChat">
          close
        </button>
      </div>
      <div class="flex border-inherit border-b items-center space-x-3 upper-container p-2">
        <div class="bg-white rounded-full p-2">
          <img
            class="w-7 h-7 rounded-full object-cover"
            src="@/assets/images/chatbot.png"
          />
        </div>
        <div>
          <p class="font-semibold">Marv</p>
          <p class="text-xs text-slate-100">Always Active</p>
        </div>
      </div>

      <div id="message-container" class="p-2">
        <div
          v-for="message in messages"
          :key="message.id"
          :class="['message-bubble', `${message.type}-bubble`, 'animate__animated', 'animate__fadeInUp', 'flex-col']"
          :style="{'animation-duration': '.2s'}"
        >
          <p>{{ message.text }}</p>
        </div>
      </div>

      <form
        id="message-form"
        class="flex items-center justify-between mt-3 p-3"
        @submit.prevent="sendMessage"
      >
        <input
          id="message-input"
          class="rounded-xl w-96 mr-4 px-3 py-2 border border-gray-300 focus:outline-0"
          type="text"
          placeholder="Ask Marv..."
          v-model="newMessage"
        />
        <div class="flex items-center justify-center gap-1 p-3 rounded-full w-10 h-10 send-button">
          <button
            id="send-btn"
            class="text-white text-md material-icons-outlined"
            type="submit"
          >
            send
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  
  data() {
    return {
      isVisible: false,
      messages: [],
      newMessage: ''
    };
  },
  methods: {
    toggleChat() {
      this.isVisible = !this.isVisible;

      if (this.isVisible) {
        setTimeout(() => this.addChatMessage("Hello! How can I assist you today?", "bot"), 1000);
      }
    },
    addChatMessage(text, type) {
      this.messages.push({ text, type });
      this.scrollToBottom();
    },
    
    scrollToBottom() {
      this.$nextTick(() => {
        const messageContainer = document.getElementById("message-container");
        messageContainer.scrollTop = messageContainer.scrollHeight;
      });
    },

    async sendMessage() {
      const messageText = this.newMessage;
      this.newMessage = "";

      this.addChatMessage(messageText, "user");

      const botTypingDiv = document.createElement("div");
      botTypingDiv.classList.add("message", "bot-typing-message");

      const typingText = document.createElement("p");
      botTypingDiv.appendChild(typingText);

      const dotsContainer = document.createElement("div");
      dotsContainer.classList.add(
        "typing-dots-container",
        "message-bubble",
        "bot-bubble"
      );

      for (let i = 0; i < 3; i++) {
        const dot = document.createElement("span");
        dot.classList.add("typing-dot");
        dotsContainer.appendChild(dot);
      }
      botTypingDiv.appendChild(dotsContainer);

      document.getElementById("message-container").appendChild(botTypingDiv);

      await this.sendMessageToBot(messageText, botTypingDiv);
    },
    
    async sendMessageToBot(messageText, botTypingDiv) {
  try {
    const response = await axios.post("http://127.0.0.1:8000/", {
      message: messageText
    });
    const data = response.data;

    document.getElementById("message-container").removeChild(botTypingDiv);

    const botMessage = data.content;
    this.addChatMessage(botMessage, "bot")

    if (botMessage === "Hello! How can I assist you today?") {
      setTimeout(() => {
        this.addQuickReplies([
          "How does CloudReports work?",
          "How to get started?",
          "Know services",
        ]);
      }, 1000);
    }
  } catch (error) {
    document.getElementById("message-container").removeChild(botTypingDiv);
    console.error(error);
  }
},
    addQuickReplies(options) {
      const quickReplyContainer = document.createElement("div");
      quickReplyContainer.classList.add("quick-reply-container");

      options.forEach((option) => {
        const quickReplyButton = document.createElement("button");
        quickReplyButton.classList.add("quick-reply-button");
        quickReplyButton.textContent = option;

        quickReplyButton.addEventListener("click", () => {
          this.addChatMessage(option, "user");
          const botResponse = this.processUserSelection(option);
          this.addChatMessage(botResponse, "bot");

          quickReplyContainer.remove();
        });

        quickReplyContainer.appendChild(quickReplyButton);
      });

      document.getElementById("message-container").appendChild(quickReplyContainer);
      this.scrollToBottom();
    },
    processUserSelection(option) {
      const botResponse = option;
      return botResponse;
    },
  },
};
</script>

<style>
/* Add your custom styles here */
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
@import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
@import url('https://fonts.googleapis.com/css2?family=Material+Icons+Outlined');

#chat-window {
  width: 450px;
}

.send-button {
  background-color: #2753ff;
}

.close-button {
  transition: 0.2s;
}

.close-button:hover {
  transform: scale(1.25);
}

.upper-container {
  /* background-color:#948d8d ; */
}

.quick-reply-button {
  border: 1px solid #adbeff;
  border-radius: 30px;
  color: #3cef70c7;
  padding: 5px 10px;
  margin: 10px 5px;
  font-weight: 500;
}

.bot-startup {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#message-input {
  outline: none;
}

#message-container {
  height: 55vh;
  overflow: scroll;
  
}

.message-bubble {
  display: flex;
  align-items: flex-start;
  max-width: 80%;
  width: fit-content;
  margin-bottom: 10px;
  padding: 5px 15px;
}

.user-bubble {
  align-self: flex-end;
  margin-left: auto;
  background-color: #2753ff;
  color: white;
  border-radius: 15px 15px 0px 15px;
}

#chat-icon {
  background-color: #2753ff;
}

.bot-bubble {
  align-self: flex-start;
  background-color: #f2f4f5;
  color: black;
  border-radius: 0px 15px 15px 15px;
}

/* Hide scrollbar for Chrome, Safari and Opera */
#message-container::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
#message-container {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.typing-dots-container {
  display: flex;
}

.typing-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  margin: 0 2px;
  border-radius: 50%;
  background-color: #000;
  animation: typing 1s infinite;
}

@keyframes typing {
  0% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
}
</style>
