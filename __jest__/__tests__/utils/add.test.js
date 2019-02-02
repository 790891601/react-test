import add from "root/add"

//测试套件(test suite)
describe('add function debug', () => {
  //测试用例(test case)
  it('1 + 1 equal to 2', () => {
    expect(add(1, 1)).toBe(2)
  })
  it('2 + 5 equal to 7', () => {
    expect(add(2, 5)).toBe(7)
  })
})