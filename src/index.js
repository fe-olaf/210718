import Router from './router'

import SigninPage from './pages/signin'
import MainPage from './pages/main'
import MyPage from './pages/my'
import ErrorPage from './pages/error'

const ROUTES = {
  '/': MainPage, // 메인
  '/signin': SigninPage, // 로그인
  '/my': MyPage, // 내 정보
  '/error': ErrorPage,
}

class App {
  constructor() {
    this.router = new Router(ROUTES)
  }
}

new App()
