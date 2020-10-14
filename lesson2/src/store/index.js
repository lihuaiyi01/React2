// import { createStore, applyMiddleware } from "redux";
import { createStore, applyMiddleware } from "../kRedux";
// import thunk from "redux-thunk";
// import logger from "redux-logger";

// 定义修改规则
function countReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(countReducer, applyMiddleware(logger));

export default store;

function logger() {
  return dispatch => action => {
    console.log(action.type + "执行了");
    return dispatch(action);
  }
}
