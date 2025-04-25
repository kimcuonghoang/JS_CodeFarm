const h3Element = document.getElementsByClassName("accordion-question");
const answer = document.getElementsByClassName("accordion-answer");

for (let i = 0; i < h3Element.length; i++) {
  h3Element[i].addEventListener("click", () => {
    answer[i].classList.toggle("active");
  });
}
