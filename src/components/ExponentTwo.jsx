const ExponentTwo = ({ exponent }) => (

   <div className="exponent-counter-container">
    <p className="exponent-label">n²</p>
    <p className="exponent-result">{ exponent } * { exponent } = <span className="total">{exponent * exponent}</span></p>
  </div>
);

export default ExponentTwo;