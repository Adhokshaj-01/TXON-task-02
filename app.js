let buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll("span");
let result = document.getElementById("result");
let dark = document.querySelector(".dark");
let body = document.body;
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (this.innerHTML == "=") {
      result.innerHTML = eval(result.innerHTML);
      if (result.innerHTML == "undefined") {
        result.innerHTML = "";
      }
    } else {
      if (this.innerHTML == "AC") {
        result.innerHTML = "";
      } else {
        result.innerHTML += this.innerHTML;
      }
    }
  });
}
// dark-theme
dark.onclick = function () {
  body.classList.toggle("dark-thm");
};
window.addEventListener("load", () => {
  body.style.opacity = "1";
});
