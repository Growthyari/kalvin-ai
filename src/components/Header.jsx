import "./../styles/Header.css";
import { FiBell, FiSearch } from "react-icons/fi";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <div className="logoIcon">K</div>
        <h2>Klaiv AI</h2>
      </div>

      <div className="searchBox">
        <FiSearch />
        <input type="text" placeholder="Search chats..." />
      </div>

      <div className="rightMenu">
        <FiBell className="icon" />
        <div className="avatar">U</div>
      </div>
    </header>
  );
}

export default Header;