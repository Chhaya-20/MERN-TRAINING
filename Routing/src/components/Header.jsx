import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" activeclassname="active">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts" activeclassname="active">
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink to="/todos" activeclassname="active">
              Todos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
