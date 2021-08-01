const todos = [
  {
    id: 0,
    label: '밥먹기',
    isDone: false, // 완료 여부 체크 상태 값
  },
  {
    id: 1,
    label: '공부하기',
    isDone: true, // 완료 여부 체크 상태 값
  },
]

/**
 * 배열
 *
 * 새로운 TODO 추가하기
 * push => []
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 *
 * 요즘은 전개구문을 이용하여 값을 추가하는것이 대부분이다
 */
const addedTodos = [
  ...todos,
  {
    id: 2,
    label: '추가된 TODO',
    isDone: false, // 방금 추가한 값들은 항상 isDone false
  },
] // ... 은 알맹이들을 풀어낸다

console.log('addedTodos', addedTodos)

/**
 * 값의 삭제
 *
 * slice, splice (X)
 *
 * filter 를 이용하여 값을 삭제한다
 */
// 이름을 짓기 나름이지만, todos 의 반복이니 todo
const removedTodos = addedTodos.filter((todo) => {
  return todo.id !== 2
})

console.log('removedTodos', removedTodos)

/**
 * 값의 업데이트
 *
 * map => 원본 배열을가지고 새로운 배열을 만들어낸다.
 *
 * 0 의 id 를 가진 todo 의 isDone 값을 true 로 바꾸고싶다.
 *
 * => 업데이트가 완료된 배열에는 0 번째 id 를 가진 todo 는 isDone 이 true 일 것이다.
 */

const updatedTodos = addedTodos.map((todo) => {
  //   if (todo.id === 0) {
  //     // 업데이트 해야됨!!
  //     return { ...todo, isDone: !todo.isDone } // 현재 상태를 뒤집는다.
  //   } else {
  //     return todo
  //   }

  return todo.id === 0 ? { ...todo, isDone: !todo.isDone } : todo
})
console.log('updatedTodos', updatedTodos)

/**
 * some(OR) || , every(AND) &&
 */
// 리턴값이 모두 true
const isAllCompleted = todos.every((todo) => {
  return todo.isDone
})
console.log('isAllCompleted', isAllCompleted)

// 리턴값이 하나라도 true 면 true
const hasCompleted = todos.some((todo) => {
  return todo.isDone
})
console.log('hasCompleted', hasCompleted)
