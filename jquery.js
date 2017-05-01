var $boxes = 16

$(document).ready(function () { 

    for (var i = 1; i <= $boxes; i++) {
        $(".container").append("<div class=sub></div>");}
    
    $(".sub").hover(function() {
        $(this).css("backgroundColor", "black");
    }, function() {
        $(this).css("backgroundColor", "white");
    });



















});