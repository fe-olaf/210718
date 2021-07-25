/**
 * 객체
 *
 * => 데이터를 구조화 하기 위한 수단
 *
 * { key: value }
 */

// 떡볶이 레시피

const food = {
  name: '떡볶이',
  ingredients: ['대파', '고추장', '떡'],
}

// 상자
const box = {
  width: 100,
  height: 100,
  backgroundColor: '#efefef',
}

/**
 * Object.keys
 * Object.values
 */

Object.keys(box) // ['width', 'height' ...]
Object.values(box) // [100, 100, '#efefef']
