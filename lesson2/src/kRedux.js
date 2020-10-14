export function createStore (reducer) {
  let currentState = undefined;
  let currentListeners = [];
  function getState () {
    return currentState;
  }
  function dispatch (action) {
    currentState = reducer(currentState, action);
    // 监听函数是一个数组，那就循环吧
    currentListeners.map(listener => listener())
  }

  // 订阅，可以多次订阅
  function subscribe (listener) {
    // 每次订阅，把回调放入回调数组
    currentListeners.push(listener);
  }

  // 取值的时候，注意一定要保证不和项目中的会重复
  dispatch({ type: "@INIT/REDUX-KKB" });

  return {
    getState,
    dispatch,
    subscribe
  };
}