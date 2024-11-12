import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", function () {
  gsap.to(".slider-container", {
    x: "-80%", // chaque élément .slider-item vaut 20% de .slider-container, on veut donc bouger la position x de -80% pour faire apparaitre le dernier élément: chaque élément a besoin de 20% pour apparaitre pleinement sur l'écran.
    scrollTrigger: {
      trigger: ".slider-mask",
      start: "top top",
      scrub: 1,
      pin: true,
    },
  });
});
