function uppg8() {
  // skapa en array med fem person obkjet
  // varje person objekt ska ha två properties, name och age
  const people = [
    { name: "Arnau", age: 33 },
    { name: "Lenard", age: 25 },
    { name: "Pol", age: 32 },
    { name: "Nuria", age: 49 },
    { name: "Laia", age: 25 },
  ];

  function ageFilter(people) {
    // skapa en fuktion som tar in en array som argument
    // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
    //  över 30 år som skrivs ut i konsolen
    for (const person of people) {
      if (person.age > 30) {
        console.log(person.name);
      }
    }
  }

  ageFilter(people); // anropa funktionen och skicka med arrayen som argument
}
uppg8()

module.exports = { uppg8 };
