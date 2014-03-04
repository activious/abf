/**
 * Created by Kasper on 04/03/14.
 */
$(document).ready(
function() {
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
            hidePages()
            $("body").find("#statistik-page").show();
        });
        $("#settings-link").on("click", function() {
            hidePages()
            $("body").find("#settings-page").show();
        });
    });

function hidePages() {
    $("#home-page").hide();
    $("#statistik-page").hide();
    $("#friends-page").hide();
    $("#settings-page").hide();
}