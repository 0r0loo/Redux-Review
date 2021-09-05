import { createStore } from './redux.js';

const INCREMENT = 'increment';

function actionCreater(action, state) {
  return { type: action, payload: state };
}

// 각 컴포넌트에서 상태를 어떻게 바꿀것인지 정의하는 함수
function reducer(state = { value: 0 }, action) {
  if (action.type === INCREMENT) {
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
store.dispatch(actionCreater(INCREMENT, { value: 3 }));
store.dispatch(actionCreater(INCREMENT, { value: 1 }));
store.dispatch(actionCreater(INCREMENT, { value: 5 }));
store.dispatch(actionCreater(INCREMENT, { value: 6 }));
store.dispatch(actionCreater(INCREMENT, { value: 2 }));
store.dispatch(actionCreater(INCREMENT, { value: 3 }));
// 상태를 바꾼 후
console.log(store.getState());
