$("#output").append( "hello" );
$("#boudy").append( "We are in a forest, watch out for ghosts!");
$("#para").append( "Tucked in Evan's cozy forest cabin, Jhon wakes to birds doing karaoke and pine trees gossiping in the breeze. He brews a mug of something warm, pokes the friendly fire, and steps outside like it's his tiny kingdom. No traffic, no buzz, just moss, mugs, and mischief. Forest life suits him just fine.")



$(document).ready(function(){
    $("#good-button").click(function(){
        $("#output1").text('Good morning! Time for Jhon to start his day by chopping trees! ');
  

    });
    $("#bad-button").click(function(){
        $("#output1").text("Good night! Jhon is tucking himself to sleep, shhhh!")


    });

})

const characterA = {
    dayPhrase:  "Good morning! The forest is waking up.",
    nightPhrase: "Good night. The cabin is cozy and quiet now."
};

function switchMode(mode) {
    const body = document.body;
    const talking = document.getElementById("talking");

    if (mode === "night") {
        body.classList.remove("day");
        body.classList.add("night");
        talking.textContent = characterA.nightPhrase;
    } else {
        body.classList.remove("night");
        body.classList.add("day");
        talking.textContent = characterA.dayPhrase;
    }
}

switchMode("day");



$(document).keydown(function(event) {
  $("#info2").css("transform", "scale(1.2)");
});

$("#info1").dblclick(function() {
  $("#info1").css("transform", "scale(1.2)");
});

$("#info3").mouseleave(function() {
  $("#info3").css("transform", "scale(1.2)");
});

$("#para").mouseenter(function() {
  $("#para").css("transform", "scale(1.2)");
});

$("#para").mouseleave(function() {
  $("#para").css("transform", "scale(1.0)");
});

$(document).mousemove(function(event) {
  $("#cabinman").css({
    left: event.pageX - 60,
    top: event.pageY - 60,
    position: "absolute"
  });
});
