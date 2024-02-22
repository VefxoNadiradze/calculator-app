let themeBtns = Array.from(document.querySelectorAll(".themeBtn"));
let numbers = Array.from(document.querySelectorAll(".numBtns"));
let numFunctBtns = Array.from(document.querySelectorAll(".num-functBtns"));
let deleteBtn = document.querySelector(".delBtn");

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
