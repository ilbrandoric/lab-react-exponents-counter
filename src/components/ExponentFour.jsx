const ExponentFour = ({ exponent }) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n⁴</p>
    <p className="exponent-result">{ exponent } * { exponent } * { exponent } * { exponent } = <span className="total">{exponent * exponent * exponent * exponent}</span></p>
  </div>
);

export default ExponentFour;