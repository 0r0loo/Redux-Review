import { createStore } from './redux.js';

// 각 컴포넌트에서 상태를 어떻게 바꿀것인지 정의하는 함수
function reducer(state = { value: 0 }, action) {
  if (action.type === 'increment') {
    state = {
      ...state,
      value: state.value + action.payload.value,
    };
  }
  return state;
}

// 전역 상태 만들기
const store = createStore(reducer);

// 구독하기
store.subscribe(function () {
  // 상태를 설정하기전
  console.log(store.getState());
});

// 상태 업데이트
store.dispatch({ type: 'increment', payload: { value: 1 } });
store.dispatch({ type: 'increment', payload: { value: 4 } });
store.dispatch({ type: 'increment', payload: { value: 2 } });
store.dispatch({ type: 'increment', payload: { value: 4 } });
store.dispatch({ type: 'increment', payload: { value: 5 } });
store.dispatch({ type: 'increment', payload: { value: 1 } });
// 상태를 바꾼 후
console.log(store.getState());
