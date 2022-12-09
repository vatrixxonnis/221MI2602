// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 80 ||
    document.documentElement.scrollTop > 80
  ) {
    document.getElementById("navigationBar").style.backgroundColor =
      "gray";
      document.getElementById("navigationBar").style.opacity = "70%";
    document.getElementById("navigationBar").style.flexDirection = "row";
    document.getElementById("linkedList").style.fontSize = ".75em";
    document.getElementById("navBarLogo").style.width = "20%";
    document.getElementById("navBarLogo").style.height = "auto";
  } else {
    document.getElementById("navigationBar").style.backgroundColor =
      "black";
      document.getElementById("navigationBar").style.opacity = "100%";
    document.getElementById("navigationBar").style.flexDirection = "column";
    document.getElementById("linkedList").style.fontSize = "1em";
    document.getElementById("navBarLogo").style.width = "30%";
    document.getElementById("navBarLogo").style.height = "auto";
  }
}
var modal = document.getElementById("modalLogin")
function openModal() {
  modal.style.display = "block";
}
document.getElementById("close").onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
