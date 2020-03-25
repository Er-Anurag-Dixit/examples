import React, { useState, useCallback } from "react";
const Buttons = React.memo(({ incrementCounter }) => {
  return (
    <div>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
});
export default Buttons;
