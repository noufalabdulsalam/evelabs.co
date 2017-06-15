
$(document).ready(function() {
	    $("#ahide").hide();
	    $("#bhide").hide();
    $("#a").click(function() {
        $("#ahide").slideToggle('slow');
        });
    $("#b").click(function() {
        $("#bhide").slideToggle('slow');
        });
});       

