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

var today = new Date();
$("#start-date").val(
    today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate()
);
$("#end-date").val(
    today.getFullYear() +
    "-" +
    today.getMonth() +
    "-" +
    (today.getDate() + 4)
);
// console.log($("#start-date").val());
document.querySelectorAll("input.pickingDate").forEach((input) => {
    input.addEventListener("click", (event) => {
        const input = event.srcElement;
        // const input = event.srcElement.nextElementSibling;
        try {
            input.showPicker();
        } catch (error) {
            window.alert(error);
        }
    });
});

$(document).on("click", "#roomInfo img", function () {
    var newImage = $(this).attr("src");
    var currentImage = $("#large-picture").attr("src");
    $("#large-picture").attr("src", newImage);
    $(this).attr("src", currentImage);
});