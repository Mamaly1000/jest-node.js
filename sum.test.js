const sum = require("./sum");
describe("testing jests matchers", () => {
  test("sum three numbers to 10", () => {
    expect(sum(1, 2, 7)).toBe(10);
  });
  test("two objects are not the same", () => {
    const data = [1, 2, 3];
    const files = [1, 2, 3];
    // they are not primitive data-type
    expect(data).not.toBe(files);
  });
  test("two objects are equal", () => {
    const data = [1, 2, 3];
    const files = [1, 2, 3];
    // they are refrencive data-type but toEqual checks their data not their reference
    expect(data).toEqual(files);
  });
  test("to have a truthy result", () => {
    expect(sum(1, 2, 3) < 10).toBeTruthy();
    expect([]).toBeTruthy();
    expect({}).toBeTruthy();
  });
  test("to have a falsy result", () => {
    expect(sum(0)).not.toBeTruthy();
    expect(sum(0)).toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect([]).not.toBeFalsy();
    expect({}).not.toBeFalsy();
  });
  test("to test a function throw an error", () => {
    expect(() => sum(2, 2, 3, "sd")).toThrow();
  });
});
