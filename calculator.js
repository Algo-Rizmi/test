const plus = document.getElementById("plus");
const min = document.getElementById("min");
const divide = document.getElementById("divide");
const multi = document.getElementById("multiply");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const result = document.getElementById("result");

plus.addEventListener("click", function () {
  console.log("Button-Clicked");
  const input1 = parseInt(text1.value);
  const input2 = parseInt(text2.value);

  let sum = input1 + input2;
  result.innerHTML = `${sum}`;
});

min.addEventListener("click", function () {
  const input1 = parseInt(text1.value);
  const input2 = parseInt(text2.value);

  let minus = input1 - input2;
  result.innerHTML = `${minus}`;
});

divide.addEventListener("click", function () {
  const input1 = parseInt(text1.value);
  const input2 = parseInt(text2.value);

  let minus = input1 / input2;
  result.innerHTML = `${minus}`;
});

multi.addEventListener("click", function () {
  const input1 = parseInt(text1.value);
  const input2 = parseInt(text2.value);

  let minus = input1 * input2;
  result.innerHTML = `${minus}`;
});
