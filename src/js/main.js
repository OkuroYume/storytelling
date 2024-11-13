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
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top top",
      scrub: true,
      pin: true,
    },
  })
  .to("#bulle-1", {
    left: "27%",
    top: "13%",
    opacity: 1,
  })
  .to("#bulle-2", {
    left: "12%",
    top: "78%",
    opacity: 1,
  })
  .to("#bulle-3", {
    left: "67%",
    top: "55%",
    opacity: 1,
  })
  .to("#bulle-4", {
    left: "53%",
    top: "25%",
    opacity: 1,
  })
  .to("#bulle-5", {
    left: "60%",
    top: "95%",
    opacity: 1,
  });
