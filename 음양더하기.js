// absolutes의 길이는 1 이상 1,000 이하입니다.
// absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
// signs의 길이는 absolutes의 길이와 같습니다.
// signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.
// 입출력 예
// absolutes	     signs	             result
// [4,7,12]	   [true,false,true]	        9
// [1,2,3]	   [false,false,true]	        0

function solution(absolutes, signs) {
  let result = 0;
  absolutes.forEach((v, i) => {
    if (signs[i] === true) {
      result += absolutes[i];
    } else {
      result -= absolutes[i];
    }
  });
  return result;
}

solution([4, 7, 12], [true, false, true]);
solution([1, 2, 3], [false, false, true]);

// reduce를 사용한 방법

// const solution = (absolutes, signs) => {
//   return absolutes.reduce((acc, v, i) => acc + v * (signs[i] ? 1 : -1), 0);
// };

// console.log(solution([4, 7, 12], [true, false, true]));
// console.log(solution([1, 2, 3], [false, false, true]));
