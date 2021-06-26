function solution(k, user_scores) {
  user_scores = user_scores.map(v => v.split(" ")).map(v => ({ user: v[0], score: v[1] }));
  // [{ user: 'alex111', score: 100 }, { user: 'cheries2', score: 200 }, { user: 'coco', score: 150 }, ... , { user: 'cheries2', score: 110 }]

  // 아래는 상태라고 볼 수 있다
  // num은 바뀐 횟수(리턴해야 하는 정답), scoreBoard는 이전의 점수판 상태, temp는 새 점수가 들어온 점수판 상태
  let num = 0;
  let scoreBoard = [];
  let temp = [];

  // 아래 함수는 scoreBoard(이전의 점수판 상태)와 temp(새 점수가 들어온 점수판 상태)를 비교하기 위한 함수
  // 왜 함수가 복잡하냐면, 배열은 객체기 때문에 참조값으로 평가가 됨
  // 즉, 배열 안의 요소가 같아도 참조값이 다르면 다른 것으로 판별
  // 그래서 내부의 원시값을 하나씩 비교해 주어야 한다
  const countNum = (prev, next) => {
    // 일단, length가 다르면 서로 다른 배열이니까 넘버 올림
    if (prev.length !== next.length) {
      num++;
      return;
    }
function solution(orders) {
  // 3. 객체를 일단 생성.
  const consumer = {};

  // 얘는 접근을 쉽게 하기 위해서 배열로 쪼개 놓음 [['alex', 'pizza', 'pasta', 'pizza'], ['alex', 'steak', 'pizza'] ['bob', 'pizza', 'steak']]
  const ordersArr = orders.map(v => v.split(" "));

  ordersArr.forEach(v => {
    // 4. 쪼개 놓은 배열을 순회하면서,
    // 배열의 첫 번째 요소(이름) 으로 아까 생성한 객체에 동적 추가.
    // cousumer.~ 인데, string으로 접근할 때는, consumer[string]
    if (!consumer[v[0]]) {
      // 처음 순회할 때, consumer에 해당 요소가 없으면(undefined), 그냥 풀어.
      // (.filter 이후는 중복된 메뉴들을 삭제)
      consumer[v[0]] = [...v].filter((v, i, arr) => arr.indexOf(v) === i);
    } else {
      // 있으면, 있던 애들을 풀고, 추가로 더 풀어
      // (.filter 이후는 중복된 메뉴들을 삭제)
      consumer[v[0]] = [...consumer[v[0]], ...v].filter((v, i, arr) => arr.indexOf(v) === i);
    }
  });

  // 여기까지 해서 결국 생기는 consumer는,
  // {
  //    alex : ['alex', 'pizza', 'pasta', 'steak'],
  //    bob : ['bob', 'pizza', 'steak']
  //  }

  // 5. 메뉴 종류의 최대값 구하기
  // Object.entries -> 객체의 키와 프로퍼티를 가져와 배열로 만들어줌
  // Object.entries(consumer) === [[['alex', ['alex', 'pizza', 'pasta', 'steak']], [['bob', ['bob', 'pizza', 'steak']]]
  const maxOrder = Math.max(...Object.entries(consumer).map(v => v[1].length));

  // 6. 최대값과 같은 애들을 뽑아(여러 명일 수 있으니까)
  // 7. 소트
  return Object.entries(consumer)
    .filter(v => v[1].length === maxOrder)
    .map(v => v[0])
    .sort();
}

console.log(solution(["alex pizza pasta", "alex pizza pizza", "alex noodle", "bob pasta", "bob noodle sandwich pasta", "bob steak noodle"]));
console.log(solution(["alex pizza pasta steak", "bob noodle sandwich pasta", "choi pizza sandwich pizza", "alex pizza pasta steak"]));


