/**
 * Created by Kasper on 04/03/14.
 */
$(document).ready(
function() {
    hidePages()
    $("body").find("#home-page").show();
    $("#home-link").on("click", function() {
        hidePages();
        $("body").find("#home-page").show();
    });
    $("#friends-link").on("click", function() {
        hidePages();
        $("body").find("#friends-page").show();
    });
    $("#statistik-link").on("click", function() {
        hidePages();
        $("body").find("#statistik-page").show();
        drawGraph();
    });
    $("#settings-link").on("click", function() {
        hidePages();
        $("body").find("#settings-page").show();
    });
});

function hidePages() {
    $("#home-page").hide();
    $("#statistik-page").hide();
    $("#friends-page").hide();
    $("#settings-page").hide();
}

function drawGraph() {
    var line1=[['2008-09-30 4:00PM',4], ['2008-10-30 4:00PM',6.5], ['2008-11-30 4:00PM',5.7], ['2008-12-30 4:00PM',9], ['2009-01-30 4:00PM',8.2]];
    var plot1 = $.jqplot('chart1', [line1], {
        title:'Default Date Axis',
        axes:{xaxis:{renderer:$.jqplot.DateAxisRenderer}},
        series:[{lineWidth:4, markerOptions:{style:'square'}}]
    });
}
