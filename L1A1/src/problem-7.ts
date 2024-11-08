{
  class Car {
    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {}
    getCarAge = (): number => new Date().getFullYear() - this.year;
  }

  //   const car1 = new Car("toyota", "km56d", 2010);
  //   console.log(car1.getCarAge);
}
