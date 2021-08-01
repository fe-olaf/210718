// 클래스는 대문자로 시작한다
// 객체를 만드는 방법중에 하나 !
// 객체를 만들어 내는 틀

class TodoManager {
  // 클래스가 만들어질 때 제일먼저 동작하는 함수
  // 값을 초기화하는 곳, 처음 만들어 질 때 동작할 함수들을 정의
  constructor() {
    this.todos = [] // this === Todo
  }

  // 프로토타입
  addTodo(label) {
    this.todos = [
      ...this.todos,
      {
        id: this.todos.length + 1,
        label, // key value 가 같으면 생략이 가능하다.
        isDone: false,
      },
    ]
  }
  removeTodo(id) {
    this.todos = this.todos.filter((todo) => {
      return todo.id !== id
    })
  }
  updateTodo(id) {
    this.todos = this.todos.map((todo) => {
      return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    })
  }
  isAllCompleted() {
    return this.todos.every((todo) => {
      return todo.isDone
    })
  }
  hasCompleted() {
    return this.todos.some((todo) => {
      return todo.isDone
    })
  }
}

// 만들때는 new 키워드를 사용한다.
// var todo = new Todo()

export default TodoManager
