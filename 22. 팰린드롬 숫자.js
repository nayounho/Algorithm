// 두 자연수 n, m이 매개변수로 주어질 때, n 이상 m 이하의 자연수 중 팰린드롬인 숫자의 개수를 return 하도록
// solution 함수를 완성해 주세요.
// n	  m	  result
// 1	  100	  18
// 100	300	  20

function solution(n, m) {
  let count = 0;

  for (let i = n; i <= m; i++) {
    if ((i + "").split("").reverse().join("") === i + "") count += 1;
  }

  return count;
}

console.log(solution(1, 150));
console.log(solution(100, 500));
