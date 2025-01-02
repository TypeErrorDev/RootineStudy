const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg shadow-lg ${className}`}>{children}</div>
);

export default Card;
