function uppg9() {
  const numbers = [1, 5, 25, 9, 17, 22, 999, 33];

  // skapa en funktion som heter sort och tar in en array av siffror som argument
  // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
  // i if-sattsen skriv ut i konsolen resultatet
  // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"
  function sort(numbers) {
    for (const number of numbers) {
      if (number % 2 === 0) {
        console.log(`Nummer ${number}, är jämt.`);
      } else {
        console.log(`Nummer ${number}, är udda.`);
      }
    }
  }

  // anropa funktionen och skicka med en array som argument
  sort(numbers);
}
uppg9();
module.exports = { uppg9 };
