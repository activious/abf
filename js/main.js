var activePanel;

$(function() {
    // Bind button click handlers
    $(".button").click(function() {
       goto(this.id);
    });

    $.getScript("js/jquery-ui-1.10.4.custom.min.js")
        .done(function() {
            goto("home");
        });
});

function goto(name)
{
    if (activePanel != null)
        activePanel.animate({
            left: "-100%"
        }, {
            duration: 500,
            easing: "easeInOutQuart",
            complete: function() {
                activePanel.css({
                    left: 0,
                    height: 0
                });
                activatePanel(name);
            }
        });
    else
        activatePanel(name);
}

function activatePanel(name)
{
    activePanel = $(".panel." + name);
    activePanel.animate({
        height: "100%"
    }, {
        duration: 1000,
        easing: "easeOutCubic"
    });
}
