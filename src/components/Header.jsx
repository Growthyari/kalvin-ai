import "./../styles/Header.css";
import { FiBell, FiSearch } from "react-icons/fi";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <div className="logoIcon">N</div>
        <h2>NovaMind</h2>
      </div>

      <div className="searchBox">
        <FiSearch />
        <input type="text" placeholder="Search chats..." />
      </div>

      <div className="rightMenu">
        <FiBell className="icon" />
        <div className="avatar">A</div>
      </div>
    </header>
  );
}

export default Header;