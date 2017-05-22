var $boxes = 16

$(document).ready(function () { 

    for (var i = 1; i <= $boxes; i++) {
        $(".container").append("<div class=sub></div>");}
    
    $(".sub").hover(function() {
        $(this).css("backgroundColor", "black");
    }, function() {
        $(this).css("backgroundColor", "white");
    });

    $(".button").click(function () {
        $(".container").empty();
        var $boxes = prompt("Please input the number of boxes:");
    });
















});