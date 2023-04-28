$(function() {

    // info button transitions
    $(".menuButton").on("click", function() {
      $(".side-menu").toggleClass("show-sidemenu");
      $("body").toggleClass("push-body");
      $(".menuButton").toggleClass("hide-button");
    });

    $(".close-button").on("click", function() {
      $(".side-menu").toggleClass("show-sidemenu");
      $("body").toggleClass("push-body");
      $(".menuButton").toggleClass("hide-button");
    });
  });
