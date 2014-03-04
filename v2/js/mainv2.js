/**
 * Created by Kasper on 04/03/14.
 */
var plot

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
    var line1=[['2014-02-25 00:00AM',40], ['2014-02-26 00:00AM',33], ['2014-02-27 00:00AM',37], ['2014-02-28 00:00AM',41], ['2014-03-01 00:00AM',39], ['2014-03-02 00:00AM',29], ['2014-03-03 00:00AM',47], ['2014-03-04 00:00AM',40]];
    plot = $.jqplot('chart1', [line1], {
        title:'Consumption of electricity last 7 days',
        axes:{xaxis:{renderer:$.jqplot.DateAxisRenderer,
            tickOptions:{formatString:'%m/%#d-%y'},
            min:'2014-02-25',
            tickInterval:'1 day'
        }},
        series:[{lineWidth:4, markerOptions:{style:'square'}}]
    });
}
var resizeGraph = function() {
    if (plot)
        plot.destroy();
    drawGraph();
}

$(window).resize(function() {
    resizeGraph();
});