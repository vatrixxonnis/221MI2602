window.onload = () => {
    setBackgroundImageHeight()
}
$(window).resize(function () {
    setBackgroundImageHeight();
});
function setBackgroundImageHeight() {
    document.getElementById("mainContent").style.height = "fit-content";
    var height1 = document.getElementById("mainContent").offsetHeight;
    var height2 = parseInt($("footer").css('marginTop'));
    var height3 = parseInt($("#section p").css('marginTop'));
    var height4 = parseInt($("#section p").css('marginBottom'));
    var temp = height1 + height2 + height3 + height4;
    document.getElementById("backgroundImage").style.height = temp;
}