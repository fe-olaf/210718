// for (x), while (종종)

/**
 * for in({}), for of ([])
 */

const obj = { a: 10, b: 20 }

for (const key in obj) {
  console.log(key, key[key]) // => a, 10
}

const arr = [1, 2, 3, 4]
for (const value of arr) {
  console.log(value)
}
