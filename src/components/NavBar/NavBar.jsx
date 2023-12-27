import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar__wrapper">
        <div className="nav-bar__left">
          <div className="item">
            <img src="/img/en.png" alt="us flag" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="nav-bar__item">
            <span>USD</span> <KeyboardArrowDownIcon />
          </div>
          <div className="nav-bar__item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="nav-bar__item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="nav-bar__item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="nav-bar__center">
          <div className="nav-bar__item nav-bar__item--center">
            <Link className="link" to="/">
              SuperStore
            </Link>
          </div>
        </div>
        <div className="nav-bar__right">
          <div className="nav-bar__item">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="nav-bar__item">
            <Link className="link" to="/">
              Aboute
            </Link>
          </div>
          <div className="nav-bar__item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="nav-bar__icons">
            <SearchIcon />
            <PersonIcon />
            <FavoriteBorderIcon />
            <div className="nav-bar__cart-icon">
              <ShoppingCartIcon />
              <span className="nav-bar__cart-counter-icon">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
