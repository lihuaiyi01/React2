export function createStore (reducer) {
  let currentState = undefined;
  let currentListeners = [];
  function getState () {
    return currentState;
  }
  function dispatch (action) {
    currentState = reducer(currentState, action);
  }

  // 订阅，可以多次订阅
  function subscribe (listener) {
    currentListeners.push(listener);
  }

  return {
    getState,
    dispatch,
    subscribe
  };
}