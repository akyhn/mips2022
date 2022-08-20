// Menu clicked
$(".menu_btn").on("click", function () {
  $(this).find(".menu-stroke_block.top").toggleClass("is-clicked");
  $(this).find(".menu-stroke_block.bottom").toggleClass("is-clicked");
  $(this).find(".menu-stroke_block.center").toggleClass("is-clicked");
});

// CTA Container hover move arrow
$(".container_cta").on("mouseenter mouseleave", function () {
  $(this).find(".icon-1x1-small.cta-container").toggleClass("is-hovered");
});

// Stroke under current link nav
$(".nav-link_block.w-inline-block.w--current")
  .find(".nav-link_stroke.is-default")
  .removeClass("is-default");
$(".nav-link_block.w-inline-block.w--current")
  .find(".nav-link_stroke")
  .css("transform", "translate(0,0)");
