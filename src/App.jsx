import "./App.css";
import { useState } from "react";
import PartnerCEO from "./pages/partnerceo";

import {
  FaRobot,
  FaPlus,
  FaSearch,
  FaFolder,
  FaClock,
  FaPuzzlePiece,
  FaCode,
  FaCog,
  FaPaperclip,
  FaMicrophone,
  FaPaperPlane,
  FaThumbsUp,
  FaThumbsDown,
  FaCopy,
  FaRedo,
  FaUsers,
  FaShare,
  FaEllipsisH
} from "react-icons/fa";


function App(){
const [showPartnerPage, setShowPartnerPage] = useState(false);

if (showPartnerPage) {
  return (
    <div style={{ overflowY: "auto", height: "100vh" }}>
      <PartnerCEO onBack={() => setShowPartnerPage(false)} />
    </div>
  );
}
return(

<div className="app">


{/* ================= SIDEBAR ================= */}

<aside className="sidebar">


<div className="brand">

<FaRobot/>

<h2>
Klaiv AI
</h2>

</div>



<button className="newChat">

<FaPlus/>

New Chat

</button>




<div className="sideMenu">


<div className="menuItem active">
<FaSearch/>
Search
</div>


<div className="menuItem">
<FaFolder/>
Library
</div>


<div className="menuItem">
<FaCode/>
Projects
</div>


<div className="menuItem">
<FaClock/>
History
</div>


<div className="menuItem">
<FaPuzzlePiece/>
Agents
</div>

<div
  className="menuItem"
  onClick={() => setShowPartnerPage(true)}
>
  <FaUsers />
  Our Partner CEOs
</div>

<div className="menuItem">
<FaCog/>
Settings
</div>


</div>




<div className="recent">


<h4>
Recent Chats
</h4>



<div className="recentChat activeChat">
AI Resume Builder
</div>


<div className="recentChat">
React Dashboard
</div>


<div className="recentChat">
Expense Tracker
</div>


<div className="recentChat">
Research Assistant
</div>



</div>




<div className="userProfile">


<div className="avatar">
KU
</div>


<div>

<strong>
Guest
</strong>

<p>
Free Plan
</p>

</div>


</div>



</aside>





{/* ================= MAIN ================= */}


<main className="chatContainer">


<header className="topBar">


<div className="model">

<span>
●
</span>

Klaiv AI

<select>

<option>
Smart Model
</option>

<option>
Creative Mode
</option>

<option>
Code Mode
</option>

</select>

</div>



<div className="topActions">

<button
  className="partnerBtn"
  onClick={() => setShowPartnerPage(true)}
>
  <FaUsers />
  Our Partner CEOs
</button>

<button>
<FaShare/>
Share
</button>


<button>
<FaEllipsisH/>
</button>


</div>


</header>



<section className="conversation">


<div className="welcome">

<h1>
How can Klaiv AI help today?
</h1>


<p>
Your intelligent AI workspace for coding, research,
design and creativity.
</p>


</div>
{/* ================= CHAT MESSAGES ================= */}


<div className="message aiMessage">


<div className="messageHeader">

<div className="aiLogo">
<FaRobot/>
</div>


<strong>
Klaiv AI
</strong>

</div>



<p>
Hello! 👋
Welcome to Klaiv AI. 
I am Klaiv AI. I can help you with coding,
UI design, documents, research and productivity.
</p>



<div className="messageActions">

<button>
<FaCopy/>
</button>

<button>
<FaThumbsUp/>
</button>

<button>
<FaThumbsDown/>
</button>

<button>
<FaRedo/>
</button>


</div>



</div>





<div className="message userMessage">


<p>
Create a modern React AI assistant interface.
</p>


</div>






<div className="message aiMessage">


<div className="messageHeader">

<div className="aiLogo">
<FaRobot/>
</div>


<strong>
Klaiv AI
</strong>


</div>



<p>

Sure! I will create a modern AI workspace
with a clean chat interface, history management,
file support and smart assistant features.

</p>



<div className="messageActions">


<button>
<FaCopy/>
</button>


<button>
<FaThumbsUp/>
</button>


<button>
<FaThumbsDown/>
</button>


<button>
<FaRedo/>
</button>


</div>



</div>






</section>
{/* ================= INPUT AREA ================= */}


<footer className="inputWrapper">


<button className="attachBtn">

<FaPaperclip/>

</button>




<input
type="text"
placeholder="Ask Klaiv AI anything..."
/>




<button className="micBtn">

<FaMicrophone/>

</button>




<button className="sendBtn">

<FaPaperPlane/>

</button>



</footer>




</main>


</div>


);

}


export default App;
