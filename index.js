var globalArray = [];
function addElement(arrayName, idElement, idAdd, idShow) {
  document.querySelector(idAdd).onclick = () => {
    arrayName.push(+document.querySelector(idElement).value);
    document.querySelector(idShow).innerHTML = arrayName;
  };
}
// Bài 0
addElement(globalArray, "#element", "#add", "#added");
document.querySelector("#choice").addEventListener("change", () => {
  var choice =
    +document.querySelector("#choice").options[
      document.querySelector("#choice").selectedIndex
    ].value;
  var functions = document.querySelectorAll("body > div");
  for (let i = 1; i < functions.length; i++) {
    let idFunction = "#" + functions[i].getAttribute("id");
    if (i === choice)
      document.querySelector(idFunction).style.display = "block";
    else document.querySelector(idFunction).style.display = "none";
  }
});
// Bài 1
document.querySelector("#calculateSum").onclick = () => {
  var sum = 0;
  for (let i = 0; i < globalArray.length; i++)
    sum += globalArray[i] > 0 ? globalArray[i] : 0;
  document.querySelector("#calculatedSum").innerHTML = sum;
};
// Bài 2
document.querySelector("#countPositiveElements").onclick = () => {
  var count = 0;
  for (let i = 0; i < globalArray.length; i++) {
    if (globalArray[i] > 0) ++count;
  }
  document.querySelector("#countedPositiveElements").innerHTML = count;
};
// Bài 3
document.querySelector("#findMinimumElement").onclick = () => {
  var minimumElement = globalArray[0];
  for (let i = 1; i < globalArray.length; i++)
    minimumElement = Math.min(minimumElement, globalArray[i]);
  document.querySelector("#foundMinimumElement").innerHTML = minimumElement;
};
// Bài 4
document.querySelector("#findMinimumPositiveElement").onclick = () => {
  var minimumPositiveElement = 0;
  var checkPositive = false;
  for (let i = 0; i < globalArray.length; i++) {
    if (globalArray[i] > 0) {
      if (!checkPositive) {
        minimumPositiveElement = globalArray[i];
        checkPositive = true;
      } else
        minimumPositiveElement = Math.min(
          minimumPositiveElement,
          globalArray[i]
        );
    }
  }
  document.querySelector("#foundMinimumPositiveElement").innerHTML =
    minimumPositiveElement;
};
// Bài 5
document.querySelector("#findLastEvenElement").onclick = () => {
  var lastEvenElement = -1;
  for (let i = globalArray.length - 1; i >= 0; i--) {
    if (globalArray[i] % 2 === 0) {
      lastEvenElement = globalArray[i];
      break;
    }
  }
  document.querySelector("#foundLastEvenElement").innerHTML = lastEvenElement;
};
// Bài 6
document.querySelector("#swapElements").onclick = () => {
  var position1 = +document.querySelector("#position1").value;
  var position2 = +document.querySelector("#position2").value;
  var temp = globalArray[position1];
  globalArray[position1] = globalArray[position2];
  globalArray[position2] = temp;
  document.querySelector("#swappedElements").innerHTML = globalArray;
};
// Bài 7
document.querySelector("#sortArray").onclick = () => {
  for (let i = 1; i < globalArray.length; i++) {
    let index = i - 1;
    let element = globalArray[i];
    while (index >= 0 && globalArray[index] > element) {
      globalArray[index + 1] = globalArray[index];
      --index;
    }
    globalArray[index + 1] = element;
  }
  document.querySelector("#sortedArray").innerHTML = globalArray;
};
// Bài 8
function isPrime(x) {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return x > 1;
}
document.querySelector("#findFirstPrime").onclick = () => {
  var firstPrime = -1;
  for (let i = 0; i < globalArray.length; i++) {
    if (isPrime(globalArray[i])) {
      firstPrime = globalArray[i];
      break;
    }
  }
  document.querySelector("#foundFirstPrime").innerHTML = firstPrime;
};
// Bài 9
var newArray = [];
addElement(newArray, "#newArrayElement", "#addNewArrayElement", "#newArray");
document.querySelector("#countIntegers").onclick = () => {
  var countIntegers = 0;
  for (let i = 0; i < newArray.length; i++) {
    if (Number.isInteger(newArray[i])) ++countIntegers;
  }
  document.querySelector("#countedIntegers").innerHTML = countIntegers;
};
// Bài 10
document.querySelector("#compareNumbers").onclick = () => {
  var countPositive = 0;
  var countNegative = 0;
  var result;
  for (let i = 0; i < globalArray.length; i++) {
    if (globalArray[i] > 0) ++countPositive;
    if (globalArray[i] < 0) ++countNegative;
  }
  if (countPositive > countNegative)
    result = "Số Lượng Số Dương Lớn Hơn Số Lượng Số Âm";
  else if (countPositive < countNegative)
    result = "Số Lượng Số Âm Lớn Hơn Số Lượng Số Dương";
  else result = "Số Lượng Số Dương Bằng Số Lượng Số Âm";
  document.querySelector("#comparedNumbers").innerHTML = result;
};
