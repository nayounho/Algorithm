function solution(goods, boxes) {
  let result = 0;
  const goodArr = goods.sort();
  const boxArr = boxes.sort();
  boxArr.forEach((box, i) => {
    goodArr.forEach(good => {
      if (good <= box) {
        result += 1;
        let goodArr = goodArr.shift();
      } else {
        return;
      }
    });
  });
  return result;
}

// console.log(solution([5, 3, 7], [3, 7, 6]));
// console.log(solution([1, 2], [2, 3, 1]));
console.log(solution([3, 8, 6], [5, 6, 4]));
