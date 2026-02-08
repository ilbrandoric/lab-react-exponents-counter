const ExponentSix = ({ exponent }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁶</p>
    <p className="exponent-result">{ exponent } * { exponent } * { exponent } * { exponent } * { exponent } * { exponent } = <span className="total">{exponent * exponent * exponent * exponent * exponent * exponent}</span></p>
  </div>
);

export default ExponentSix;