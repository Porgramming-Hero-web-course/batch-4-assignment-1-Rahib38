{
  type Circle = {
    shape: "circle";
    radius: number;
  };
  type Rectangle = {
    shape: "rectangle";
    height: number;
    width: number;
  };

  type Shape = Circle | Rectangle;
  function calculateShapeArea(shape: Shape): number {
    return shape.shape === "circle"
      ? Math.PI * shape.radius ** 2
      : shape.height * shape.width;
  }
  //   console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
}
