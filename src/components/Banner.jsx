import "../App.css";
import Logo from "./Logo";
import SignInButton from "./SignInButton";
import LoginButton from "./LoginButton";
import BellButton from "./BellButton";
import ShoppingCart from "./ShoppingCart";
import Menu from "./Menu";

const Banner = () => {
  return (
    <div className="banner-container">
      <Logo />
      <div className="icon-container">
        <SignInButton />
        <LoginButton />
        <BellButton />
        <ShoppingCart />
        <Menu />
      </div>
    </div>
  );
};

export default Banner;
