{
  function removeDuplicates<T>(array: T[]): T[] {
    return Array.from(new Set(array));
  }
  //   console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}
