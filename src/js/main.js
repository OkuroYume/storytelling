import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", function () {
  gsap.to(".slider-container", {
    x: "-80%",
    scrollTrigger: {
      trigger: ".slider-mask",
      start: "top top",
      scrub: 1,
      pin: true,
    },
  });
});
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".parallax-container",
      start: "top top",
      scrub: 1,
      pin: true,
    },
  })
  .to("#element-3", {
    y: "-5%",
    x: "5%",
  })
  .to(
    "#element-1",
    {
      y: "-5",
    },
    0
  )
  .to(
    "#element-2",
    {
      y: "-5%",
    },
    0
  )
  .to(
    "#element-4",
    {
      y: "5%",
    },
    0
  );
