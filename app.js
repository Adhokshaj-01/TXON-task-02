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
let calci = document.querySelector('.calci');
let foot = document.querySelector('.foot')
calci.addEventListener('mouseover',()=>{
  dark.style.top = "-40px";
  foot.style.display = 'none';
})
calci.addEventListener('mouseleave',()=>{
  dark.style.top = "20px";
  foot.style.display = 'block';

})

