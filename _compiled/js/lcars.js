jQuery(function($) {

  $(".container").fadeIn();
  $("audio#beep1").trigger("load");
  $("audio#beep2").trigger("load");
  $("audio#disabled1").trigger("load");
  $("audio#disabled2").trigger("load");

  $(".tappable").on("mousedown", function() {
    if ($(this).hasClass("beep2")) {
      $("audio#beep2").prop("volume", 0.07).trigger("play");
    } else {
      $("audio#beep1").prop("volume", 0.07).trigger("play");
    }
    $(".tappable").removeClass("active");
    $(".tail").children(".bar:first-child").removeClass("active");
    $(this).addClass("active");
    if ($(this).hasClass("tail-connect")) {
      $(this).parents(".menu").siblings(".content").children(".tail").children(".bar:first-child").addClass("active");
    }
  }).on("mouseup", function() {
    $(this).removeClass("active");
    $(this).parents(".menu").siblings(".content").children(".tail").children(".bar:first-child").removeClass("active");
  });

  $(".disabled").on("mousedown", function() {
    $("audio#disabled1").trigger("stop");
    $("audio#disabled1").prop("volume", 0.08).trigger("play");
  });


  $("#mode-toggle").on("click", function() {
    $("html").toggleClass("klingon");
  });
});