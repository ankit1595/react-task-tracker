import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, handleAddForm }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={"green"} text="Add" onClick={handleAddForm} />
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
