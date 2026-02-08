import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";

import { useState } from "react";

function App() {
  const [exponent, setExponent] = useState(2);

  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>

      <Counter exponent={exponent} setExponent={setExponent} />

      <br />
      <h2>
        <em>Exponents</em>
      </h2>

      <div className="container">

        <ExponentTwo exponent={exponent} />
        <ExponentThree exponent={exponent} />
        <ExponentFour exponent={exponent} />
        <ExponentFive exponent={exponent} />
        <ExponentSix exponent={exponent} />
      </div>
    </div>
  );
}

export default App;
