function solution(orders) {
  const consumer = {};

  const ordersArr = orders.map(v => v.split(" "));

  ordersArr.forEach(v => {
    if (!consumer[v[0]]) {
      consumer[v[0]] = [...v].filter((v, i, arr) => arr.indexOf(v) === i);
    } else {
      consumer[v[0]] = [...consumer[v[0]], ...v].filter((v, i, arr) => arr.indexOf(v) === i);
    }
  });

  const maxOrder = Math.max(...Object.entries(consumer).map(v => v[1].length));

  return Object.entries(consumer)
    .filter(v => v[1].length === maxOrder)
    .map(v => v[0])
    .sort();
}

console.log(solution(["alex pizza pasta", "alex pizza pizza", "alex noodle", "bob pasta", "bob noodle sandwich pasta", "bob steak noodle"]));
console.log(solution(["alex pizza pasta steak", "bob noodle sandwich pasta", "choi pizza sandwich pizza", "alex pizza pasta steak"]));
