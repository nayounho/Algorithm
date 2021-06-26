// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.
// 입출력         예
// s	         return
// "abcde"	     "c"
// "qwer"	    "we"

function solution(s) {
  result = "";
  const stringLength = s.length;
  const middle = Math.floor(stringLength / 2);
  if (stringLength % 2 === 0) {
    result = s[middle - 1] + s[middle];
  } else {
    result = s[middle];
  }
  return result;
}

console.log(solution("s"));
console.log(solution("abcde"));
console.log(solution("qwer"));

//삼항연산자로 했을 경우

// const solution = s => {
//   let result = "";
//   const stringLength = s.length;
//   const middle = Math.floor(stringLength / 2);
//   return (result = stringLength % 2 === 0 ? s[middle - 1] + s[middle] : s[middle]);
// };

// console.log(solution("s"));
// console.log(solution("abcde"));
// console.log(solution("qwer"));
