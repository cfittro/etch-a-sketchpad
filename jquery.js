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
        var $wh = Math.sqrt($boxes);
        var $whfloor = Math.floor($wh);
        var $boxesfloor = $whfloor * $whfloor;
        for (var i = 1; i <= $boxesfloor; i++) {
            $(".container").append("<div class=sub></div>");}
        $(".sub").css({'height': 800 / $whfloor,'width': 800 / $whfloor});
        $(".sub").hover(function() {
        $(this).css("backgroundColor", "black");
        }, function() {
        $(this).css("backgroundColor", "white");
        });
    });
});