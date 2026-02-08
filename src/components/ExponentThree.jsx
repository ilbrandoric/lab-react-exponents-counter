const ExponentThree = ({ exponent }) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n³</p>
    <p className="exponent-result">{ exponent } * { exponent } * { exponent } = <span className="total">{exponent * exponent * exponent}</span></p>
  </div>
);

export default ExponentThree;