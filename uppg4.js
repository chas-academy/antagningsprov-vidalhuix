function uppg4() {
  // deklarera ett objekt med namnet person
  // objektet ska ha två properties, name och age
  // tilldela age 25
  // skriv ut med dotnotation åldern i konsolen
  const person = {
    name: "Arnau",
    age: 25,
  };

  console.log(person.name);
  console.log(person.age);
}
uppg4();

module.exports = { uppg4 };
