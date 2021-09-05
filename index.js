import { createStore } from './redux.js';

// 각 컴포넌트에서 상태를 어떻게 바꿀것인지 정의하는 함수
function reducer(state, action) {
  if (action.type === 'increment') {
    state = {
      ...state,
      value: action.payload.value,
    };
  }
  return state;
}

// 전역 상태 만들기
const store = createStore(reducer);
// 상태를 설정하기전
console.log(store.getState());

// 상태 업데이트
store.dispatch({ type: 'increment', payload: { value: 1 } });
// 상태를 바꾼 후
console.log(store.getState());
