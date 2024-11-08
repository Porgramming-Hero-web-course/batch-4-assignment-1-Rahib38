"use strict";
{
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
            this.getCarAge = () => new Date().getFullYear() - this.year;
        }
    }
    //   const car1 = new Car("toyota", "km56d", 2010);
    //   console.log(car1.getCarAge);
}
