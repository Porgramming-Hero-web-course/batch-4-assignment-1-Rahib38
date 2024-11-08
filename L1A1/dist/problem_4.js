"use strict";
{
    function calculateShapeArea(shape) {
        return shape.shape === "circle"
            ? Math.PI * Math.pow(shape.radius, 2)
            : shape.height * shape.width;
    }
    //   console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
}
