// main.js

// *** header

// * header gnb

const $gnb = document.querySelector(".gnb");
const $gnbMenu = document.querySelector(".gnb_menu");
const $gnbClose = document.querySelector(".gnb_close");

$gnb.onclick = function () {
  console.log("gnb showing");
  $gnbMenu.style.display = "block";
};
$gnbClose.onclick = function () {
  console.log("gnb closing");
  $gnbMenu.style.display = "none";
};

// *** section.skills
