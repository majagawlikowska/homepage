console.log("Hi there, (❁´◡`❁)");

const button = document.querySelector(".button");
const footer__header = document.querySelector(".footer__header");

button.addEventListener("click", () => {
   if (footer__header.innerText === "e-mail") {
      footer__header.innerText = "maja@poczta.pl";
   } else {
      (footer__header.innerText === "maja@poczta.pl")
      footer__header.innerText = "e-mail";

   } if (button.innerText === "Pokaż") {
      button.innerText = "Ukryj";
   } else {
      (button.innerText === "Ukryj")
      button.innerText = "Pokaż";

   }
});


