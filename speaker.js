// Speaker modal
$(".event-speaker").on("click", function () {
  $(this).siblings(".speaker-modal_wrapper").addClass("is-open");
  $(this).siblings(".speaker-modal_overlay").addClass("is-open");
  gsap.from($(this).siblings(".speaker-modal_container"), {
    opacity: 0,
    y: "-100%",
    duration: 0.8,
    delay: 0.4,
    ease: "power1.out",
  });
});

$(".speaker-modal_btn").on("click", function () {
  $(".speaker-modal_overlay").removeClass("is-open");
  $(".speaker-modal_wrapper").removeClass("is-open");
  $(".speaker-modal_container").removeClass("is-open");
});

$(document).on("keyup", function (e) {
  if (e.key == "Escape") $(".speaker-modal_btn").click();
});

