import React, { useState } from 'react';
import ReactReduxPage from "./pages/ReactReduxPage";
import RouterPage from "./pages/RouterPage";
import RouteChildren from "./pages/RouteChildren";
import { Route } from 'react-router-dom';
import RouteComponePage from './pages/RouteComponePage';

function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      {/* <button onClick={() => setNum(num + 1)}>change num {num}</button> */}
      {/* react redux学习 */}
      {/* <ReactReduxPage num="num" /> */}

      {/* router 学习*/}
      <RouterPage />

      {/* route children */}
      {/* <RouteChildren /> */}

      {/* // ! 比较一下render和component，重点掌握 */}
      {/* <RouteComponePage /> */}
    </div >
  );
}

export default App;
