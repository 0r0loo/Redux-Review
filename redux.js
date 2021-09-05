export function createStore(reducer) {
  let state;

  function dispatch(data) {
    state = reducer(state, data);
  }

  function getState() {
    return state;
  }

  return {
    dispatch,
    getState,
  };
}
