let themeBtns = Array.from(document.querySelectorAll(".themeBtn"));

// theme function
themeBtns.forEach((themeBtn) => {
  themeBtn.addEventListener("click", () => {
    if (themeBtn.value === "1") {
      // themeBtn switch
      themeBtns.forEach((items) => {
        items.classList.remove("active");
      });
      themeBtn.classList.add("active");
      //////////
      document.body.classList.remove("bodyThemeTwo");
      document.body.classList.remove("bodyThemeThree");
    } else if (themeBtn.value === "2") {
      // themeBtn switch
      themeBtns.forEach((items) => {
        items.classList.remove("active");
      });
      themeBtn.classList.add("active");
      ///////

      document.body.classList.remove("bodyThemeThree");
      document.body.classList.add("bodyThemeTwo");
    } else {
      // themeBtn switch
      themeBtns.forEach((items) => {
        items.classList.remove("active");
      });
      themeBtn.classList.add("active");
      /////////
      document.body.classList.remove("bodyThemeTwo");
      document.body.classList.add("bodyThemeThree");
    }
  });
});

const numBtns = Array.from(document.querySelectorAll(".numBtns"));
const result = document.querySelector(".result");
const funcBtns = Array.from(document.querySelectorAll(".funcBtn"));
const equality = document.querySelector(".equality");
const operatorDiv = document.querySelector(".operatorDiv");
const deleteBtn = document.querySelector(".delBtn");
const resetBtn = document.querySelector(".reset");

let currentNumb = "";
let prevNumb = "";
let res = 0;

result.textContent = 0;

numBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", () => {
    currentNumb += numBtn.textContent;
    result.textContent = currentNumb;
  });
});

funcBtns.forEach((funcBtn) => {
  funcBtn.addEventListener("click", () => {
    if (currentNumb !== "") {
      prevNumb = currentNumb;
      currentNumb = "";
    }
    operatorDiv.textContent = funcBtn.textContent;
  });
});

deleteBtn.addEventListener("click", () => {
  result.textContent = result.innerHTML.slice(0, -1);

  if (result.innerHTML.length < 1) {
    result.textContent = 0;
    currentNumb = "";
    operatorDiv.textContent = "";
  }
});

resetBtn.addEventListener("click", () => {
  result.textContent = 0;
  currentNumb = "";
  operatorDiv.textContent = "";
});

equality.addEventListener("click", () => {
  let prevNum = Number(prevNumb);
  let currNum = Number(currentNumb);

  switch (operatorDiv.textContent) {
    case "+":
      res = prevNum + currNum;
      break;
    case "-":
      res = prevNum - currNum;
      break;
    case "X":
      res = prevNum * currNum;
      break;

    case "/":
      if (!currNum) {
        result.textContent = "Error";
      }
      res = prevNum / currNum;
      break;

  }

  result.textContent = res;
  console.log(operatorDiv.textContent);
  currentNumb = res;
});
