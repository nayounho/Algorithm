// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.

// 입출력 예
// s	           return
// "a234"	     false
// "1234"	     true

// 내가 봐도 지저분하게 풀었는데 다른 사람들 풀이를 보니까 정규표현식으로 풀면 깔끔하게 풀린다. 정규표현식을 좀 더 공부해서 깔끔하게 풀어봐야겠다
// 처음에 테스트 케이스 9,10번이 계속 실패로 떠서 뭐가 문제인지 파악이 안됐었는데 0을 숫자로 인식하지 못해 false를 반환하게 되서 생기는 문제였다
// 그래서 지저분한 코드 추가하여 걸러냈다.
function solution(s) {
  let result = [];
  const arr = s.split('')
  if (arr.length === 4 || arr.length === 6) {
  for (let i = 0; i < arr.length; i++) {
    +arr[i] || +arr[i] === 0 ? result.push(true) : result.push(false)
    } 
  }else result.push(false)
  console.log(result)
  return result.includes(false) ? false : true
}

console.log(solution('1234a2'))