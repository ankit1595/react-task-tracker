import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, handleAddForm, showAddTask }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" &&
        (showAddTask ? (
          <Button color="red" text="Close" onClick={handleAddForm} />
        ) : (
          <Button color="green" text="Add" onClick={handleAddForm} />
        ))}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
