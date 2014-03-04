/**
 * Created by Kasper on 04/03/14.
 */
$(document).ready(
function() {
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
            $("body").find("#friends-page").show();
        });
    });

function hidePages() {
    $("#home-page").hide();
    $("#statistik-page").hide();
    $("#friends-page").hide();
    $("#settings-page").hide();
}