window.onload = () => {
    setBackgroundImageHeight()
    document.getElementById('mainContent').scrollIntoView(true);
}
$(window).resize(function () {
    setBackgroundImageHeight();
});
function setBackgroundImageHeight() {
    document.getElementById("mainContent").style.height = "fit-content";
    var height1 = document.getElementById("mainContent").offsetHeight;
    var height2 = parseInt($("footer").css('marginTop'));
    var temp = height1 + height2;
    document.getElementById("backgroundImage").style.height = temp;
}