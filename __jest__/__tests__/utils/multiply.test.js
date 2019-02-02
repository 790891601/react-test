import multiply from "root/multiply"

describe("multiply function test", () => {
  it("any * 0 equal to 0", () => {
    expect(multiply(5, 0)).toBe(0)
  })
  it("5 * 5 equal to 25", () => {
    expect(multiply(5, 5)).toBe(25)
  })
})