$(document).ready(function () {
  $("#chat-toggler").click(function () {
    $(".chatbox").toggleClass("active");
  });
  $("#close").click(function () {
    $(".chatbox").toggleClass("active");
  });

  $("#chat-toggler").click(function () {
    $.each($(".animationClass"), function (i, el) {
      $(el).css({ opacity: 0 });
      setTimeout(function () {
        $(el).animate(
          {
            opacity: 1.0,
          },
          650
        );
      }, 700 + i * 700);
    });
  });
});
