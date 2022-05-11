import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const handleClick = () => console.log("clicked");
  return (
    <header className="header">
      <h1> {title}</h1>
      <Button color={"black"} text="Add" onClick={handleClick} />
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
