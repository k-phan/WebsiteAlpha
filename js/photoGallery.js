/**
 * Created by Khai on 1/21/2017.
 */

function main() {

    var PanelButtons = [
        $('.updates-b'),
        $('.aboutme-b'),
        $('.project-b'),
        $('.gallery-b'),
        $('.contact-b')
    ];

    var PanelsArray = [
        $('.updates-panel'),
        $('.aboutme-panel'),
        $('.project-panel'),
        $('.gallery-panel'),
        $('.contact-panel')
    ];

    /* #TODO Will come up with better solution in future updates */
    var ChangePanels = function (index) {
        $('.active-panel').fadeOut(300);
        $('.active-panel').removeClass('active-panel');
        PanelsArray[index].addClass('active-panel');
        $('.active-panel').delay(300).fadeIn(300);
    };

    /* Set up all listeners ... #TODO NEED BETTER SOLUTION */
    PanelButtons[0].on('click', function () {

        $('.active').removeClass('active');
        PanelButtons[0].addClass('active');
        ChangePanels(0);
    });

    PanelButtons[1].on('click', function () {
        $('.active').removeClass('active');
        PanelButtons[1].addClass('active');
        ChangePanels(1);
    });

    PanelButtons[2].on('click', function () {
        $('.active').removeClass('active');
        PanelButtons[2].addClass('active');
        ChangePanels(2);
    });

    PanelButtons[3].on('click', function () {
        $('.active').removeClass('active');
        PanelButtons[3].addClass('active');
        ChangePanels(3);
    });

    PanelButtons[4].on('click', function () {
        $('.active').removeClass('active');
        PanelButtons[4].addClass('active');
        ChangePanels(4);
    });

    /* Hide all the panels */
    for (var i = 0; i < PanelsArray.length; i++) {
        PanelsArray[i].hide();
    }

    $('html').fadeIn(1000);
}

$(document).ready(main);