{
  function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
    const checkkeyObject = keys.filter((key) => !obj[key]);
    return checkkeyObject.length === 0;
  }
  //   const person = { name: "Alice", age: 30, city: "Wonderland" };

  //   console.log(validateKeys(person, ["name", "age"]));
}
