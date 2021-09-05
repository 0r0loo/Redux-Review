export function createStore(reducer) {
  let state;
  const subscribers = [];

  function subscribe(subscriber) {
    subscribers.push(subscriber);
  }

  function dispatch(data) {
    state = reducer(state, data);
    subscribers.forEach((subscriber) => {
      subscriber();
    });
  }

  function getState() {
    return state;
  }

  return {
    dispatch,
    getState,
    subscribe,
  };
}
