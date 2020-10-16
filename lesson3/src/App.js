import React, { useState } from 'react';
import ReactReduxPage from "./pages/ReactReduxPage";

function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <button>change num</button>
      {/* react redux学习 */}
      <ReactReduxPage num="num" />
    </div>
  );
}

export default App;
