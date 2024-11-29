import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// Attendre que le DOM soit complètement chargé avant d'exécuter les animations.
window.addEventListener("DOMContentLoaded", function () {
  // Animation horizontale de la ".slider-container" au scroll.
  gsap.to(".slider-container", {
    x: "-80%",
    scrollTrigger: {
      trigger: ".slider-mask", // Élément déclencheur.
      start: "top top", // Début de l'animation : le haut de ".slider-mask" atteint le haut de la fenêtre.
      scrub: 1, // Animation fluide liée au défilement.
      pin: true, // Fixe le contenu pendant le défilement.
    },
  });
});
// Création d'une timeline pour animer plusieurs éléments dans ".parallax-container".
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".parallax-container", // Élément déclencheur.
      start: "top top",
      scrub: 1,
      pin: true,
    },
  })
  .to("#element-3", {
    y: "-5%", // Déplacement vertical vers le haut.
    x: "5%", // Déplacement horizontal vers la droite.
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
// Animation des bulles autour de l'élément "#epee".
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#epee", // Élément déclencheur.
      start: "50% center", // Début quand le centre de la fenêtre atteint 50% de "#epee".
      end: "bottom top", // Fin quand le bas de "#epee" atteint le haut de la fenêtre.
      scrub: true, // Animation fluide liée au défilement.
    },
  })
  .to("#bulle-1", {
    left: "12%", // Positionnement horizontal.
    top: "25%", // Positionnement vertical.
    opacity: 1, // Rendre la bulle visible.
  })
  .to("#bulle-2", {
    left: "55%",
    top: "10%",
    opacity: 1,
  })
  .to("#bulle-3", {
    left: "66%",
    top: "45%",
    opacity: 1,
  })
  .to("#bulle-4", {
    left: "19%",
    top: "75%",
    opacity: 1,
  })
  .to("#bulle-5", {
    left: "60%",
    top: "85%",
    opacity: 1,
  });
