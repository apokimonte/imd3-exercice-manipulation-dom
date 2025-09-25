document.addEventListener("DOMContentLoaded", function () {
  const exercice1 = document.querySelector("#exercice-1");
  const exercice2 = document.querySelector("#exercice-2");
  const exercice3 = document.querySelector("#exercice-3");

  if (exercice1) {
    exercice1.querySelector(".broccoli")?.remove();
    exercice1.querySelector(".broccoli")?.remove();
    exercice1.querySelector(".broccoli")?.remove();
    exercice1.querySelector(".broccoli")?.remove();
    exercice1.querySelector(".broccoli")?.remove();
    exercice1.querySelector(".broccoli")?.remove();
  }

  if (exercice2) {
    document.querySelector(".pizza.raw").classList.add("cooked");
    document.querySelector(".burned").classList.remove("burned");
    document.querySelector("#pizza-special").classList.toggle("highlighted");
    document.querySelector(".pizza.basic").classList.add("premium", "deluxe");
    document.querySelector("#leftover-pizza").classList.remove("cold");
    document.querySelector("#leftover-pizza").classList.add("hot");
    document.querySelector("#pizza-resize").classList.remove("regular-size");
    document.querySelector("#pizza-resize").classList.add("large-size");
    document
      .querySelector("#veggie-pizza")
      .classList.remove("unfinished", "raw");
    document.querySelector("#veggie-pizza").classList.add("ready");
    document
      .querySelector('.pizza[data-type="special"]')
      .classList.toggle("glowing");
    document
      .querySelector('.pizza[data-type="special"]')
      .classList.toggle("animated");
    document.querySelector("#final-pizza").classList.remove("boring");
    document.querySelector("#final-pizza").classList.add("amazing");
    document.querySelector("#final-pizza").classList.toggle("featured");
  }

  if (exercice3) {
    // Ecrire ici tout le code pour l'exercice 3: Ecouteurs d'événement
  }
});
