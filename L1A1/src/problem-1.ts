{
  function sumArray(num: number[]): number {
    const sum = num.reduce((total, value) => total + value, 0);
    return sum;
  }

  console.log(sumArray([1, 2, 3, 4, 5]));
}
