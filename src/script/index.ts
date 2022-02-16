import { animate } from "./animate";

window.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.querySelector(
    ".js-multiwizard__next"
  ) as HTMLButtonElement;
  const prevButton = document.querySelector(
    ".js-multiwizard__prev"
  ) as HTMLButtonElement;
  nextButton.innerHTML = "Next";
  prevButton.innerHTML = "Previous";
  const form = document.querySelector(".form") as HTMLFormElement;
  const steps = document.querySelectorAll(".js-step");
  const container = document.querySelector(
    ".steps__container"
  ) as HTMLDivElement;

  container.style.width = `${steps[0].clientWidth * 2}px`;
  form.style.width = `${steps[0].clientWidth}px`;
  let counter = 0;

  const navigation = document.querySelector(
    ".nav__container"
  ) as HTMLDivElement;
  const navItems = document.querySelectorAll(".nav__item");
  const title = document.querySelector(".js-title") as HTMLHeadingElement;
  const navList = document.querySelector(".nav__list") as HTMLUListElement;
  const dots: HTMLButtonElement[] = [];
  navList.style.display = "none";
  const textItems: string[] = [];
  const dotsContainer = document.createElement("div");
  dotsContainer.classList.add("dots__container");
  const progressBar = document.createElement("div");
  progressBar.classList.add("progress__bar");
  dotsContainer.appendChild(progressBar);
  navItems.forEach((item, index) => {
    textItems.push(item.innerHTML);
    const dot = document.createElement("button");
    dot.innerHTML = `${index + 1}`;
    dot.classList.add("dot", "btn");
    dot.setAttribute("type", "button");
    dots.push(dot);
    dotsContainer.appendChild(dot);
  });
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      counter = -index;
      const controls = animate(counter, steps[0].clientWidth);
      controls.play();
    });
  });
  navigation.prepend(dotsContainer);
  console.log(textItems);
  title.innerHTML = textItems[-counter];
  nextButton.addEventListener("click", () => {
    counter--;
    title.innerHTML = textItems[-counter];

    const length = navItems.length - 1;
    const width = (100 / length) * -counter;
    progressBar.style.width = `${width}%`;
    const controls = animate(counter, steps[0].clientWidth);
    controls.play();
  });
  prevButton.addEventListener("click", () => {
    counter++;
    title.innerHTML = textItems[-counter];
    const length = navItems.length - 1;
    const width = (100 / length) * -counter;
    progressBar.style.width = `${width}%`;
    const controls = animate(counter, steps[0].clientWidth);
    controls.play();
  });
});
