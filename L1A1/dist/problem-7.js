"use strict";
{
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const getCurrentYear = new Date().getFullYear();
            const carAge = getCurrentYear - this.year;
            // if instance set year greater than the current year is given it will be return 0
            return carAge >= 0
                ? `${carAge} (assuming current year is ${getCurrentYear} )`
                : `The car manufacture year cannot be greater than the current year (assuming current year is ${getCurrentYear} )`;
        }
    }
    // const car1 = new Car("toyota", "km56d", 2010);
    // console.log(car1.getCarAge());
}
