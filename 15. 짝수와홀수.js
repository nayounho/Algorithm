//evenOrOdd 함수는 정수 num을 매개변수로 받는다. num은 1이상의 정수이며, num이 음수인 경우는 없다. 
//num이 짝수일 경우 ‘Even’을 반환하고 홀수인 경우 ‘Odd’를 반환하도록 evenOrOdd 함수를 완성하라.

// if문 사용
function evenOrOdd(num) {
  if (num % 2 === 0) {
    return 'Even'
  } else {
    return 'Odd'
  }
  };
  
  // 삼항조건연산자 사용
  function evenOrOdd(num) {
  return num % 2 ? 'Odd' : 'Even';
  };
  
  
  console.log(evenOrOdd(2)); // Even
  console.log(evenOrOdd(3)); // Odd
  console.log(evenOrOdd(1000)); // Even