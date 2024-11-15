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
      trigger: "#epee",
      start: "50% center",
      end: "bottom top",
      scrub: true,
      // markers: true,
      // pin: true,
    },
  })
  .to("#bulle-1", {
    left: "12%",
    top: "25%",
    opacity: 1,
  })
  .to("#bulle-2", {
    left: "19%",
    top: "75%",
    opacity: 1,
  })
  .to("#bulle-3", {
    left: "66%",
    top: "45%",
    opacity: 1,
  })
  .to("#bulle-4", {
    left: "55%",
    top: "10%",
    opacity: 1,
  })
  .to("#bulle-5", {
    left: "60%",
    top: "85%",
    opacity: 1,
  });
