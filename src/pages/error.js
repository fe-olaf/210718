class ErrorPage {
  constructor() {
    this.rootEl = document.getElementById('root')

    this.render()
  }

  // 페이지 내용을 그려주는 함수
  render() {
    this.rootEl.innerHTML = `
      <h1>Error Page</h1>
    `
  }
}

export default ErrorPage
