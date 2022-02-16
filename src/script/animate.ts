import anime from "animejs";

export function animate(counter: number, width: number) {
  const controls = anime({
    autoplay: false,
    targets: ".steps__container",
    translateX: counter * width,
    opacity: [0, 1],
    easing: "linear",
    duration: 350,
  });
  return controls;
}
