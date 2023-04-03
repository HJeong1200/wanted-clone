// Components
import GNB from "./GNB";
import Login from "./Login";
import Logo from "./Logo";
// CSS
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Logo />
      <GNB />
      <Login />
    </header>
  );
};

export default Header;
