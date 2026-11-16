// Zoznam úloh – logika aplikácie

// 1. Premenné – odkazy na prvky stránky (DOM)
const vstup = document.getElementById("input-uloha");
const tlacidloPridaj = document.getElementById("button-pridaj");
const zoznam = document.getElementById("zoznam-uloh");
const chyba = document.getElementById("chybova-sprava");
const pocitadlo = document.getElementById("pocitadlo");

// Vlastná funkcia: prepočíta a zobrazí počet nesplnených úloh
function aktualizujPocitadlo() {
  const otvorene = zoznam.querySelectorAll("li:not(.hotovo)").length;
  pocitadlo.textContent = "Otvorené úlohy: " + otvorene;
}

// Vlastná funkcia: vytvorí novú úlohu a pridá ju do zoznamu
function pridajUlohu() {
  const text = vstup.value.trim(); // trim() odstráni medzery na okrajoch

  // Ošetrenie nesprávneho vstupu: prázdny text sa nepridá
  if (text === "") {
    chyba.classList.remove("skryta");
    vstup.focus();
    return;
  }
  chyba.classList.add("skryta");

  // Vytvorenie prvkov novej úlohy
  const polozka = document.createElement("li");

  const zaskrtavacie = document.createElement("input");
  zaskrtavacie.type = "checkbox";
  zaskrtavacie.className = "zaskrtavacie";

  const popis = document.createElement("span");
  popis.className = "text-ulohy";
  popis.textContent = text; // textContent je bezpečné (nevykoná HTML kód)

  const tlacidloZmaz = document.createElement("button");
  tlacidloZmaz.className = "button-zmaz";
  tlacidloZmaz.textContent = "Zmazať";

  // Udalosť: označenie úlohy ako dokončenej
  zaskrtavacie.addEventListener("change", function () {
    polozka.classList.toggle("hotovo", zaskrtavacie.checked);
    aktualizujPocitadlo();
  });

  // Udalosť: odstránenie úlohy
  tlacidloZmaz.addEventListener("click", function () {
    polozka.remove();
    aktualizujPocitadlo();
  });

  polozka.append(zaskrtavacie, popis, tlacidloZmaz);
  zoznam.appendChild(polozka);

  vstup.value = ""; // vyčistenie vstupného poľa
  vstup.focus();
  aktualizujPocitadlo();
}

// Udalosť: kliknutie na tlačidlo „Pridať“
tlacidloPridaj.addEventListener("click", pridajUlohu);

// Udalosť: stlačenie klávesu Enter v poli
vstup.addEventListener("keydown", function (udalost) {
  if (udalost.key === "Enter") {
    pridajUlohu();
  }
});

// Skrytie chyby, keď používateľ začne písať
vstup.addEventListener("input", function () {
  chyba.classList.add("skryta");
});

aktualizujPocitadlo();
