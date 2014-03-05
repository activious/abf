/**
 * Created by Kasper on 04/03/14.
 */
var plot
var plot2

$(document).ready(
function() {
    $.jqplot.config.enablePlugins = true;
    hidePages();
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
    $("#first").on("click", function() {
        hidePages()
        $("body").find("#friends-page").show();
        $("#general-content").hide();
        $("body").find("#first-content").slideToggle();
        if (plot2)
            plot2.destroy();
        renderGraph();
    })
    $("#second").on("click", function() {
        hidePages()
        $("body").find("#friends-page").show();
        $("#general-content").hide();
        $("#second-content").show();
    })
    $("#third").on("click", function() {
        hidePages()
        $("body").find("#friends-page").show();
        $("#general-content").hide();
        $("#third-content").show();

    })
    $("#fourth").on("click", function() {
        hidePages()
        $("body").find("#friends-page").show();
        $("#general-content").hide();
        $("#fourth-content").show();
    })
    $("#fifth").on("click", function() {
        hidePages()
        $("body").find("#friends-page").show();
        $("#general-content").hide();
        $("#fifth-content").show();
    })
});

function hidePages() {
    $("#home-page").hide();
    $("#statistik-page").hide();
    $("#friends-page").hide();
    $("#settings-page").hide();
    $("#first-content").hide();
    $("#second-content").hide();
    $("#third-content").hide();
    $("#fourth-content").hide();
    $("#fifth-content").hide();
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
        series:[{lineWidth:4, markerOptions:{style:'circle'}}]
    });
}
function renderGraph() {
    var line1=[['2014-02-25 00:00AM',40], ['2014-02-26 00:00AM',33], ['2014-02-27 00:00AM',37], ['2014-02-28 00:00AM',41], ['2014-03-01 00:00AM',39], ['2014-03-02 00:00AM',29], ['2014-03-03 00:00AM',47], ['2014-03-04 00:00AM',40]];
    var line2=[['2014-02-25 00:00AM',30], ['2014-02-26 00:00AM',31], ['2014-02-27 00:00AM',33], ['2014-02-28 00:00AM',44], ['2014-03-01 00:00AM',35], ['2014-03-02 00:00AM',27], ['2014-03-03 00:00AM',40], ['2014-03-04 00:00AM',43]];
    plot2 = $.jqplot('chart2', [line1, line2], {
        title:'Consumption of electricity last 7 days',
        axes:{
            xaxis:{
                renderer:$.jqplot.DateAxisRenderer,
                rendererOptions:{
                },
                tickOptions:{
                    formatString:'%m/%#d-%y',
                    fontSize:'10pt',
                    fontFamily:'Tahoma'
                },
                min:'2014-02-25',
                tickInterval:'1 day'
            }},
        series:[{lineWidth:4, markerOptions:{style:'circle'}}]
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