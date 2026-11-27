const wszystko = document.querySelectorAll(".iloscDuze, .iloscMale");

wszystko.forEach((kontener) => {
  const wyswietlacz = kontener.querySelector("span");
  const dodaj = kontener.querySelector(".dodaj");
  const odejmij = kontener.querySelector(".odejmij");

  let stan = 0;

  dodaj.addEventListener("click", () => {
    if (stan < 999) {
      stan++;
      wyswietlacz.textContent = stan;
    }
  });

  odejmij.addEventListener("click", () => {
    if (stan > 0) {
      stan--;
      wyswietlacz.textContent = stan;
    }
  });
});
