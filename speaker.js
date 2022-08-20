let modalContainer = $("speaker-modal_wrapper").find(".speaker-modal_container");
// Speaker modal
$(".event-speaker").on("click", function () {
  $(this).siblings(".speaker-modal_wrapper").addClass("is-open");
  $(this).siblings(".speaker-modal_overlay").addClass("is-open");
  gsap.from($(this).siblings(modalContainer), {
    opacity: 0,
    y: "-100%",
    duration: 0.8,
    delay: 0.4,
    ease: "power2.out"
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

gsap.from(".event_container", {
  opacity: 0,
  x: -1000,
  duration: 0.8,
  ease: "power1.out",
});