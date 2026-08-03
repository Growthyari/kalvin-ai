import "../styles/ChatInput.css";
import { FiPaperclip, FiMic, FiSend } from "react-icons/fi";

function ChatInput() {
  return (
    <div className="chatInput">

      <button>
        <FiPaperclip />
      </button>

      <input
        type="text"
        placeholder="Ask NovaMind anything..."
      />

      <button>
        <FiMic />
      </button>

      <button className="send">
        <FiSend />
      </button>

    </div>
  );
}

export default ChatInput;