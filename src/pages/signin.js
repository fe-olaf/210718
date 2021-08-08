class SigninPage {
  constructor() {
    this.rootEl = document.getElementById('root')

    this.render()
  }

  // 페이지 내용을 그려주는 함수
  render() {
    this.rootEl.innerHTML = `
      <div class="wrap_signin">
        <input id="email" placeholder="이메일을 입력해주세요" />
        <input id="password" type="password" placeholder="비밀번호를 입력해주세요"/>
        <button class="btn_submit">로그인</button>
      </div>
    `
  }
}

export default SigninPage
