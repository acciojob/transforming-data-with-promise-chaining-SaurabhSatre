document.getElementById("btn").addEventListener("click", function () {
  const inputVal = document.getElementById("ip").value;
  const outputDiv = document.getElementById("output");

  // Clear previous output
  outputDiv.innerHTML = "";

  // Helper function to create delayed promise
  function delayedPromise(fn, delay) {
    return (value) =>
      new Promise((resolve) => {
        setTimeout(() => {
          const result = fn(value);
          outputDiv.innerHTML = `Result: ${result}`;
          resolve(result);
        }, delay);
      });
  }

  // Start promise chain
  new Promise((resolve) => {
    setTimeout(() => {
      const num = parseFloat(inputVal);
      outputDiv.innerHTML = `Result: ${num}`;
      resolve(num);
    }, 2000);
  })
    .then(
      delayedPromise((n) => n * 2, 2000) // multiply by 2
    )
    .then(
      delayedPromise((n) => n - 3, 1000) // subtract 3
    )
    .then(
      delayedPromise((n) => n / 2, 1000) // divide by 2
    )
    .then((n) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = n + 10;
          outputDiv.innerHTML = `Final Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    });
});
