import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, handleAddForm, showAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      {showAddTask ? (
        <Button color="red" text="Close" onClick={handleAddForm} />
      ) : (
        <Button color="green" text="Add" onClick={handleAddForm} />
      )}
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
