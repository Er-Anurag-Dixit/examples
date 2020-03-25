import React, { useState, useCallback } from "react";

import Buttons from "./Button";
const App = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, [setCount]);

  return (
    <div>
      <div> Hello World</div>
      {console.log("rendering")}
      <br />
      <div>Number Incremented by {count}</div>
      <br />
      <Buttons incrementCounter={increment} />
    </div>
  );
};

export default App;
