const add = require("./index")

test("addition", () => {
  expect(add(1, 2)).toEqual(3)
  expect(add(1, 5)).toEqual(6)
  expect(add(2, 5)).toEqual(7)
})
