import "./NavBar.scss";
import historyIcon from "../../assets/icons/history.png";
import ordersIcon from "../../assets/icons/orders-icon.png";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-list__item">
          <NavLink to="/history" className="nav-list__link">
            <img
              src={historyIcon}
              className="nav-list__icon"
              alt="history-icon"
            />{" "}
            History
          </NavLink>
        </li>{" "}
        <li className="nav-list__item">
          <NavLink to="/orders" className="nav-list__link">
            <img
              src={ordersIcon}
              className="nav-list__icon"
              alt="orders-icon"
            />{" "}
            Orders
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
