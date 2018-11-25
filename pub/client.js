var socket = io();

function startUp(){

    $("#attendance").click(function() {
        $("#loggedIn").hide();
        $("#divAttend").show();
    });

    $("#fundraising").click(function() {
        $("#loggedIn").hide();
        $("#divFunds").show();
    });

    $("#events").click(function() {
        $("#loggedIn").hide();
        $("#divEvents").show();
    });

    $("#forum").click(function() {
        $("#loggedIn").hide();
        $("#divForum").show();
    });

}

$(startUp);