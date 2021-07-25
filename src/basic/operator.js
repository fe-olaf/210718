/**
 * 연산자
 */

/**
 * AND / OR
 *
 * && / ||
 *
 * AND(&&) => 모든 조건이 참일 때 => 참
 * OR(||) => 조건중에 하나라도 참이라면 => 참
 */

const n1 = 5 // 5 일 수도 있고 15
const n2 = 8
const n3 = 12

const isOver10 = n1 > 10 && n2 > 10 && n3 > 10 // 모든 숫자가 10보다 클 때 참
const isOver7 = n1 > 7 || n2 > 7 || n3 > 7 // 하나라도 7보다 클 때 참

/**
 * falsy
 *
 * undefined
 * null
 * 0
 * ''
 */

const b = undefined
const b1 = null
const b2 = 0
const b3 = ''

const isAllTrue = b === undefined && b1 === 0 && b2 && b3

if (b === undefined) {
}
if (b1 === null) {
}
// b2가 0 => false
// b2 === 0 => true (if 문 성립)
// b2 => false (if 문 성립 X)
// ! => true -> false / false -> true
// !b2 => !0 => 0 false -> true
if (!b2) {
  // b2 가 0일 때 동작해야되는 곳
}
