const fetchData = require("./fetch");
describe("async functions testing", () => {
  test("test an async function with callback", (done) => {
    const callback = (res) => {
      try {
        expect(res).toBe("this is response");
        done();
      } catch (error) {
        done(error);
      }
    };
    fetchData(callback);
  });
});
