const add = require("./index")

test("addition", () => {
  expect(add(1, 2)).toEqual(3)
  expect(add(1, 5)).toEqual(6)
})
