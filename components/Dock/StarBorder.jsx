import "./StarBorder.css";

export default function StarBorder({ children }) {
  return (
    <div className="star-border-container">
      <div className="border-gradient-bottom"></div>
      <div className="border-gradient-top"></div>
      <div className="inner-content">
        {children}
      </div>
    </div>
  );
}
