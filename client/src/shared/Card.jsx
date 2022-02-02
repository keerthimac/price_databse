import PropTypes from "prop-types";

function Card({ children, reverse }) {
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
}

//define default props for card
Card.defaultProps = {
  reverse: false,
};

//define prop types for card
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
