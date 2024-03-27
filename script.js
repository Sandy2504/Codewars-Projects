function number(busStops) {
  let People = 0;

  for (const [on, off] of busStops) {
    // Add the number of people getting on and subtract the number getting off
    People += on;
    People -= off;
  }

  return Math.max(0, People);
}

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8],
  ])
);
console.log(
  number([
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
  ])
);
