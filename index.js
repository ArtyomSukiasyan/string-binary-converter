const stringFromTextArea = document.querySelector("#string");
const convertfromStringButton = document.querySelector("#string-button");
const binaryP = document.querySelector(".binary-code");
const binaryFromTextArea = document.querySelector("#binary");
const convertfromBinaryButton = document.querySelector("#binary-button");

convertfromStringButton.addEventListener("click", () =>
  convertStrToBinary(stringFromTextArea.value)
);

convertfromBinaryButton.addEventListener("click", () =>
  convertBinaryToStr(binaryFromTextArea.value)
);

function convertStrToBinary(str) {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    const binaryCode = charCode.toString(2);
    res += `${binaryCode} `;
  }

  binaryP.textContent = res;

  return res;
}

function convertBinaryToStr(binary) {
  let res = "";
  const binariesArr = binary.split(" ");

  for (let i = 0; i < binariesArr.length; i++) {
    const charcode = parseInt(binariesArr[i], 2);
    const letter = String.fromCharCode(charcode);
    res += letter;
  }

  console.log(res.length);
  if (res.length === 1) {
    binaryP.textContent = "No results, please check input";
  } else {
    binaryP.textContent = res;
  }

  return res;
}
