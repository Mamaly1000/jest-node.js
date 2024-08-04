function fetchPromise(number) {
  return new Promise((res, rej) => {
    if (number > 5) {
      setTimeout(() => {
        return res("this is response");
      }, 1000);
    } else {
      rej("error");
    }
  });
}
module.exports = fetchPromise;
