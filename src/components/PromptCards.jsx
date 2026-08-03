import "../styles/PromptCards.css";
import { FiCode, FiBookOpen, FiEdit3, FiZap } from "react-icons/fi";

function PromptCards() {
  return (
    <div className="cards">

      <div className="card">
        <FiCode />
        <h3>Code</h3>
        <p>Generate React components and debug code.</p>
      </div>

      <div className="card">
        <FiBookOpen />
        <h3>Research</h3>
        <p>Find information and summarize topics.</p>
      </div>

      <div className="card">
        <FiEdit3 />
        <h3>Write</h3>
        <p>Create blogs, emails and documents.</p>
      </div>

      <div className="card">
        <FiZap />
        <h3>Ideas</h3>
        <p>Brainstorm products and business ideas.</p>
      </div>

    </div>
  );
}

export default PromptCards;