import { createStore } from './redux.js';

// 각 컴포넌트에서 상태를 어떻게 바꿀것인지 정의하는 함수
function updater(state, data) {
  return (state = data);
}

// 전역 상태 만들기
const store = createStore(updater);
// 상태를 설정하기전
console.log(store.getState());

// 상태 업데이트
store.doUpdate('Update state');
// 상태를 바꾼 후
console.log(store.getState());
