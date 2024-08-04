const fetchPromise = require("./promise");
describe("testing promise based functions", () => {
  test("response is 'this is reponse'", () => {
    return expect(fetchPromise(11)).resolves.toBe("this is response");
  });
  test("response is rejected", () => {
    return fetchPromise(1).catch((err) => expect(err).toBe("error"));
  });
});
