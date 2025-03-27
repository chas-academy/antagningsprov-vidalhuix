function uppg10() {
  const numbers = [5, 12, 7, 10, 20, 9, 11];

  // skapa tre arrayer - bigEven, smallOdd, other
  const bigEven = [];
  const smallOdd = [];
  const other = [];

  // loopa igenom numbers och placera talen i respektive array
  // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
  // smallOdd ska innehålla tal mindre än 10 och udda
  // other ska innehålla alla andra tal
  for (const number of numbers) {
    if (number % 2 === 0 && number >= 10) {
      bigEven.push(number);
    } else if (number % 2 !== 0 && number < 10) {
      smallOdd.push(number);
    } else {
      other.push(number);
    }
  }
  // returnera ett objekt med de tre arrayerna
  const arrays = { bigEven, smallOdd, other };
  console.log(arrays)
  return arrays;
}
uppg10();

module.exports = { uppg10 };
