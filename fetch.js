async function fetchData(cb) {
  setTimeout(async () => {
    await cb("this is response");
  }, 1000);
}

module.exports = fetchData;
