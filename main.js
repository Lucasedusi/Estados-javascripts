const ArrayEs6 = [1, 5, 8, 4, 5];

const allBost = ArrayEs6.map((item, index) => {
  return item + index;
});

const filter = ArrayEs6.filter((item) => {
  return item % 2 === 0;
});

const find = ArrayEs6.find((item) => {
  return item % 2 === 0;
});

console.log(find);
