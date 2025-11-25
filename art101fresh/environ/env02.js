

$(document).keydown(function(event) {
  $("#info1").css("transform", "scale(1.2)");
});

$("#para").dblclick(function() {
  $("#para").css("transform", "scale(1.2)");
});

$("#info3").mouseleave(function() {
  $("#info3").css("transform", "scale(1.2)");
});

$("#info2").mouseenter(function() {
  $("#info2").css("transform", "scale(10.2)");
});

$("#info2").mouseleave(function() {
  $("#info2").css("transform", "scale(1.0)");
});

$(document).mousemove(function(event) {
  $("#cabinman").css({
    left: event.pageX - 60,
    top: event.pageY - 60,
    position: "absolute"
  });
});
