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
    const carte = document.querySelector("#exercice-3-1");
    carte.addEventListener("click", function () {
      carte.classList.add("highlight");
    });
    const carte2 = document.querySelector("#exercice-3-2");
    const btn = carte2.querySelector("button");
    btn.addEventListener("click", function () {
      carte2.classList.toggle("highlight");
    });

    const carte3 = document.querySelector("#exercice-3-3");
    carte3.addEventListener("mouseenter", function () {
      carte3.classList.add("highlight");
    });
    carte3.addEventListener("mouseleave", function () {
      carte3.classList.remove("highlight");
    });
    const carte4 = document.querySelector("#exercice-3-4");
    carte4.addEventListener("mousemove", function () {
      carte4.classList.add("highlight");
    });
    const carte5 = document.querySelector("#exercice-3-5");
    window.addEventListener("scroll", function () {
      carte5.classList.add("highlight");
    });
    const carte6 = document.querySelector("#exercice-3-6");
    window.addEventListener("keydown", function () {
      carte6.classList.add("highlight");
    });
    window.addEventListener("keyup", function () {
      carte6.classList.remove("highlight");
    });
    const carte7 = document.querySelector("#exercice-3-7");
    window.addEventListener("resize", function () {
      carte7.classList.add("highlight");
    });

    // exercices ++
    const carte8 = document.querySelector("#exercice-3-8");
    document.addEventListener("keydown", function (event) {
      if (event.key === "f") {
        carte8.classList.add("highlight");
        console.log("Touche F pressée !");
      }
    });

    const input = document.querySelector("#exercice-3-9 input");
    const carte9 = document.querySelector("#exercice-3-9");
    input.addEventListener("focus", function () {
      carte9.classList.add("highlight");
    });
    input.addEventListener("blur", function () {
      carte9.classList.remove("highlight");
    });
  }
  const input10 = document.querySelector("#exercice-3-10 input");
  const carte10 = document.querySelector("#exercice-3-10");
  input10.addEventListener("input", function () {
    carte10.classList.add("highlight");
  });

  const input11 = document.querySelector("#exercice-3-11 input");
  const carte11 = document.querySelector("#exercice-3-11");
  input11.addEventListener("change", function () {
    carte11.classList.add("highlight");
  });

  const input12 = document.querySelector("#exercice-3-12 input");
  const carte12 = document.querySelector("#exercice-3-12");
  input12.addEventListener("input", function () {
    if (input12.value === "#ff0000") {
      carte12.classList.add("highlight");
    } else {
      carte12.classList.remove("highlight");
    }
  });
});
