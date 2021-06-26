//waterMelon 함수는 정수를 인수로 전달받는다. 길이가 n이고, 수박수박수…와 같은 패턴을 유지하는 문자열을 리턴하도록 
//함수를 완성하라. 예를 들어, n이 4이면 ‘수박수박’을 리턴하고 3이라면 ‘수박수’를 리턴한다.

function waterMelon(n) {
  const arr = new Array(n);
  const arr1 = [...arr].length;
  const index = Array.from({length: arr1}, (_,i) => i);
  
  const trans = index.map(v => v % 2 ? v = '박' : v = '수')
  return trans.join('');
}

console.log('n이 3인 경우: '+ waterMelon(3));
console.log('n이 4인 경우: '+ waterMelon(4));

/* 클린 코드
function waterMelon(n) {
  const index = Array.from({length: n}, (_,i) =>
                           i % 2 ?  '박' : '수'
                          );
  return index.join('');
}