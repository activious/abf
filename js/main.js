var activePanel;

$(function() {
    // Bind button click handlers
    $(".button").click(function() {
       goto(this.id);
    });

    goto("home");
});

function goto(name)
{
    if (activePanel != null)
        activePanel.slideToggle("fast", function() {
            activatePanel(name);
        });
    else
        activatePanel(name);
}

function activatePanel(name)
{
    activePanel = $(".panel." + name);
    activePanel.slideToggle("slow");
}
