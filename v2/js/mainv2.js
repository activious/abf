/**
 * Created by Kasper on 04/03/14.
 */
var plot;
var plot2;
var plot3;
var plot4;
var plot5;
var plot6;

$(document).ready(
function() {
    $("#footer").hide();
    $.jqplot.config.enablePlugins = true;
    hidePages();
    $("body").find("#login").show();
    $("#home-link").on("click", function() {
        hidePages();
        if (plot)
            plot.destroy();
        $("body").find("#home-page").show();
    });
    $("#login-button").on("click", function() {
        hidePages();
        $("#footer").show();
        $("body").find("#home-page").show();
    });

    $("#friends-link").on("click", function() {
        hidePages();
        if (plot)
            plot.destroy();
        $("body").find("#friends-page").show();
    });
    $("#statistik-link").on("click", function() {
        hidePages();
        $("body").find("#statistik-page").show();
        drawGraph();
    });
    $("#settings-link").on("click", function() {
        hidePages();
        if (plot)
            plot.destroy();
        $("body").find("#settings-page").show();
    });
    $("#first").on("click", function() {
        hidePages();
        $("body").find("#friends-page").show();
        if ($("#first-content").hasClass("down")) {
            $("body").find("#first-content").slideUp().removeClass("down");
            plot2.destroy();
        } else {
            hidePages();
            $("body").find("#friends-page").show();
            $("body").find("#first-content").slideDown().addClass("down");
            $("#general-content").hide();
            renderGraph();
        }
    });

    $("#second").on("click", function() {
        hidePages();
        $("body").find("#friends-page").show();
        if ($("#second-content").hasClass("down")) {
            $("body").find("#second-content").slideUp().removeClass("down");
            plot3.destroy();
        } else {
            hidePages();
            $("body").find("#friends-page").show();
            $("body").find("#second-content").slideDown().addClass("down");
            $("#general-content").hide();
            renderGraph1();
        }
    });

    $("#third").on("click", function() {
        hidePages();
        $("body").find("#friends-page").show();
        if ($("#third-content").hasClass("down")) {
            $("body").find("#third-content").slideUp().removeClass("down");
            plot4.destroy();
        } else {
            hidePages();
            $("body").find("#friends-page").show();
            $("body").find("#third-content").slideDown().addClass("down");
            $("#general-content").hide();
            renderGraph2();
        }
    });

    $("#fourth").on("click", function() {
        hidePages();
        $("body").find("#friends-page").show();
        if ($("#fourth-content").hasClass("down")) {
            $("body").find("#fourth-content").slideUp().removeClass("down");
            plot5.destroy();
        } else {
            hidePages();
            $("body").find("#friends-page").show();
            $("body").find("#fourth-content").slideDown().addClass("down");
            $("#general-content").hide();
            renderGraph3();
        }
    });

    $("#fifth").on("click", function() {
        hidePages();
        $("body").find("#friends-page").show();
        if ($("#fifth-content").hasClass("down")) {
            $("body").find("#fifth-content").slideUp().removeClass("down");
            plot6.destroy();
        } else {
            hidePages();
            $("body").find("#friends-page").show();
            $("body").find("#fifth-content").slideDown().addClass("down");
            $("#general-content").hide();
            renderGraph4();
        }
    });
});


function hidePages() {
    $("#login").hide();
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
        axes:{xaxis:{
            renderer:$.jqplot.DateAxisRenderer,
            tickRenderer: $.jqplot.CanvasAxisTickRenderer,
            tickOptions:{formatString:'%m/%#d-%y', angle: -30},
            min:'2014-02-25',
            tickInterval:'1 day'
        },
            yaxis:{
                label:'DKK',
                labelRenderer: $.jqplot.CanvasAxisLabelRenderer
            }},
        series:[{lineWidth:4, markerOptions:{style:'circle'}}]
    });
}

function renderGraph() {
    var line1=[['2014-02-25 00:00AM',40], ['2014-02-26 00:00AM',33], ['2014-02-27 00:00AM',37], ['2014-02-28 00:00AM',41], ['2014-03-01 00:00AM',39], ['2014-03-02 00:00AM',29], ['2014-03-03 00:00AM',47], ['2014-03-04 00:00AM',60]];
    var line2=[['2014-02-25 00:00AM',30], ['2014-02-26 00:00AM',31], ['2014-02-27 00:00AM',33], ['2014-02-28 00:00AM',44], ['2014-03-01 00:00AM',35], ['2014-03-02 00:00AM',27], ['2014-03-03 00:00AM',40], ['2014-03-04 00:00AM',72]];
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

function renderGraph1() {
    var line1=[['2014-02-25 00:00AM',40], ['2014-02-26 00:00AM',58], ['2014-02-27 00:00AM',43], ['2014-02-28 00:00AM',54], ['2014-03-01 00:00AM',53], ['2014-03-02 00:00AM',64], ['2014-03-03 00:00AM',47], ['2014-03-04 00:00AM',65]];
    var line2=[['2014-02-25 00:00AM',30], ['2014-02-26 00:00AM',65], ['2014-02-27 00:00AM',64], ['2014-02-28 00:00AM',60], ['2014-03-01 00:00AM',65], ['2014-03-02 00:00AM',34], ['2014-03-03 00:00AM',40], ['2014-03-04 00:00AM',68]];
    plot3 = $.jqplot('chart3', [line1, line2], {
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

function renderGraph2() {
    var line1=[['2014-02-25 00:00AM',40], ['2014-02-26 00:00AM',33], ['2014-02-27 00:00AM',37], ['2014-02-28 00:00AM',41], ['2014-03-01 00:00AM',39], ['2014-03-02 00:00AM',29], ['2014-03-03 00:00AM',47], ['2014-03-04 00:00AM',89]];
    var line2=[['2014-02-25 00:00AM',30], ['2014-02-26 00:00AM',31], ['2014-02-27 00:00AM',33], ['2014-02-28 00:00AM',44], ['2014-03-01 00:00AM',35], ['2014-03-02 00:00AM',27], ['2014-03-03 00:00AM',40], ['2014-03-04 00:00AM',80]];
    plot4 = $.jqplot('chart4', [line1, line2], {
        title:'Consumption of electricity last 7 days',
        axes:{
            xaxis:{
                renderer:$.jqplot.DateAxisRenderer,
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

function renderGraph3() {
        var line1=[['2014-02-25 00:00AM',40], ['2014-02-26 00:00AM',33], ['2014-02-27 00:00AM',37], ['2014-02-28 00:00AM',41], ['2014-03-01 00:00AM',39], ['2014-03-02 00:00AM',29], ['2014-03-03 00:00AM',47], ['2014-03-04 00:00AM',76]];
        var line2=[['2014-02-25 00:00AM',30], ['2014-02-26 00:00AM',31], ['2014-02-27 00:00AM',33], ['2014-02-28 00:00AM',44], ['2014-03-01 00:00AM',35], ['2014-03-02 00:00AM',27], ['2014-03-03 00:00AM',40], ['2014-03-04 00:00AM',96]];
        plot5 = $.jqplot('chart5', [line1, line2], {
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


function renderGraph4() {
        var line1=[['2014-02-25 00:00AM',40], ['2014-02-26 00:00AM',33], ['2014-02-27 00:00AM',37], ['2014-02-28 00:00AM',41], ['2014-03-01 00:00AM',39], ['2014-03-02 00:00AM',29], ['2014-03-03 00:00AM',47], ['2014-03-04 00:00AM',54]];
        var line2=[['2014-02-25 00:00AM',30], ['2014-02-26 00:00AM',31], ['2014-02-27 00:00AM',33], ['2014-02-28 00:00AM',44], ['2014-03-01 00:00AM',35], ['2014-03-02 00:00AM',27], ['2014-03-03 00:00AM',40], ['2014-03-04 00:00AM',50]];
        plot6 = $.jqplot('chart6', [line1, line2], {
            title:'Consumption of electricity last 7 days',
            axes:{
                xaxis:{
                    renderer:$.jqplot.DateAxisRenderer,
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
    if (plot2)
        plot2.destroy();
    drawGraph();
};



$(window).resize(function() {
    resizeGraph();
});