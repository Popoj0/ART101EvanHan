

let count = 0;
var colors = [ "Red", "Orange", "Yellow", "Green"];


$("#magic-button").click(function() {

    $("#magic-button").html(count + " " + colors[count]);
    
     $("body").css("background-color", colors[count]);
     
     
     count = (count + 1);
     
     if ( count == 4 ) {  count=0;  };
     
    


});