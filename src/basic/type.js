// 타입이 크게 2 종류

/**
 * 원시타입
 *
 * string
 * number
 * boolean
 * null
 * undefined
 *
 * symbol
 */

typeof '텍스트' // string
typeof 10 // number

/**
 * 객체 타입
 *
 * 함수, 객체, 배열 등등 ...
 */

// add 라는 함수는 숫자 두 개를 더하는 함수다.
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return
  }

  return a + b
}

// function add(a: number, b: number): number {
//     return a + b
// }

add(10, 20)
add('올', '라프') // ERROR
