function checkMood(score) {
  if (score > 7) return "Happy 😊😊";
  if (score > 4) return "Sad 🥹🥹";
  return "Very Sad 😭😭";
}

function showMood() {
  let randomScore = Math.floor(Math.random() * 10) + 1;
  let moodResult = checkMood(randomScore);


  $("#mood-display").html(
    "Score: " + randomScore + "<br>Your mood is: <b>" + moodResult + "</b>"
  );

  if (randomScore > 7) {
    $("#mood-display").append("<br>Yay! 🎉");
    $("body").css("background-color", #00FF00);
  } else if (randomScore > 4) {
    $("#mood-display").append("<br>Awe! 😊");
    $("body").css("background-color", #FFFF00);
  } else{
    $("#mood-display").append("<br> Hang in there!💗")
    $("body").css("background-color", #8766FF)
  }
}


$("#mood-button").click(function () {
  showMood();
});