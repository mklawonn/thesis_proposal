$(document).ready(function () {
    var HeightDiv = $("resized_div").height();
    var HeightTable = $("resized_table").height();
    if (HeightTable > HeightDiv) {
        var FontSizeTable = parseInt($("resized_table").css("font-size"), 10);
        while (HeightTable > HeightDiv && FontSizeTable > 5) {
            FontSizeTable--;
            $("resized_table").css("font-size", FontSizeTable);
            HeightTable = $("resized_table").height();
        }
    }
});
