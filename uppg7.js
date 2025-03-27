function uppg7() {
  // skapa en funktion som tar in två tal som argument
  // funktionen ska returnera summan av talen
  // kalla på funktionen i en return statement
  const a = 10;
  const b = 15;

  function sum(a, b) {
    const summan = a + b;
    return console.log(summan);
  }
  sum(a, b);
}
uppg7();

module.exports = { uppg7 };
