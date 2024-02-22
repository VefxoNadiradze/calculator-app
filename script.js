let themeBtns = Array.from(document.querySelectorAll(".themeBtn"));
let numFunctBtns = Array.from(document.querySelectorAll(".num-functBtns"));
let result = document.querySelector(".result");

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

let currentValue = "";
// calculate function
numFunctBtns.forEach((btnItems) => {
  btnItems.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "RESET":
        currentValue = "";
        result.innerHTML = "0";
        break;

      case "DEL":
        result.innerHTML = result.innerHTML.slice(0, -1);
        if (result.innerHTML.length < 1) {
          currentValue = "";
          result.innerHTML = "0";
        }
        break;
      case "=":
        try {
          result.innerHTML = eval(result.innerHTML);
        } catch (error) {
          error = "Error";
          result.innerHTML = error;
        }
        break;

      default:
        currentValue += e.target.innerText;
        result.innerHTML = currentValue;
    }
  });
});
