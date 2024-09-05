import TopHeader from "./TopHeader";
import logo from "../images/logo.png";

function Navbar() {
  return (
    <>
      <div>
        <TopHeader />
        <nav className="navbar">
          <ul className="navbar-links">
            <li>
              <a href="/men">MEN</a>
            </li>
            <li>
              <a href="/women">WOMEN</a>
            </li>
            <li>
              <a href="/kids">KIDS</a>
            </li>
            <li>
              <a href="/socks">SOCKS</a>
            </li>
            <li>
              <a href="/sale" className="sale">
                SALE
              </a>
            </li>
          </ul>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="navbar-links-right">
            <li>
              <a href="/sustainability">SUSTAINABILITY</a>
            </li>
            <li>
              <a href="/rerun">RERUN</a>
            </li>
            <li>
              <a href="/stores">STORES</a>
            </li>
            <li>
              <a href="/search">
                <i className="fas fa-search"></i>
              </a>
            </li>
            <li>
              <a href="/profile">
                <i className="fas fa-user"></i>
              </a>
            </li>
            <li>
              <a href="/help">
                <i className="fas fa-question-circle"></i>
              </a>
            </li>
            <li>
              <a href="/cart">
                <i className="fas fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
