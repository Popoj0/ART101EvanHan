$(function () {
 
  $(document).on("click", ".nice-block span", function () {
    const $span = $(this);
    const $block = $span.closest(".nice-block");
  
    $block.toggleClass("more");

    $span.text($block.hasClass("more") ? "less" : "more");
  });
  
  const $jhonImg = $("#cabinman");
  const $restoreBtn = $("#bring-back");
  const $status = $("#talking");

  function vanishJhon() {
    if ($jhonImg.is(":visible")) {
      $jhonImg.fadeOut(300, function () {
        $restoreBtn.removeClass("hidden").focus();
        $status.text("Jhon stepped behind the trees. Click the button to bring him back.");
      });
    }
  }

  function restoreJhon() {
    if ($jhonImg.is(":hidden")) {
      $jhonImg.fadeIn(300, function () {
        $restoreBtn.addClass("hidden");
        $status.text("Jhon is back by the cabin.");
      });
    }
  }

  $("#jhon-name").on("click", vanishJhon);
  $jhonImg.on("click", vanishJhon);
  $restoreBtn.on("click", restoreJhon);

  $("#jhon-name")
    .attr("tabindex", "0")
    .on("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        vanishJhon();
      }
    });
});












