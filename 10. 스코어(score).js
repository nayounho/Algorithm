// 유저가 달성한 점수(score)에 따라 실시간 랭킹을 보여주는 랭킹 페이지가 있습니다. 랭킹 페이지는 한 페이지에 K명씩 닉네임을 보여주며,
// 랭킹이 산정되는 규칙은 다음과 같습니다.
// 점수가 높은 유저의 랭킹이 더 높습니다.
// 점수가 같다면 해당 점수를 먼저 달성한 유저의 랭킹이 높습니다.
// 어떤 유저가 이전 기록보다 더 높은 점수를 달성하면, 이전 기록은 사라지고 새로운 기록이 랭킹에 반영됩니다.
// 어떤 유저가 이전 기록보다 더 낮거나 같은 점수를 달성했다면 이 기록은 무시합니다.
// 시즌이 바뀌면서 랭킹이 초기화되어 랭킹 페이지가 비어있는 상태가 됐습니다. 이때, 각 유저의 닉네임과 점수가 해당 점수를 달성한 순서대로
// 주어지면, 1페이지는 몇 번 바뀌는지 알아보려 합니다. 단, 랭킹 페이지에는 유저 닉네임만 표시되므로 점수 변화가 있더라도 랭킹에 변화가
// 없다면 랭킹 페이지는 바뀌지 않습니다.
// 한 페이지에 표시되는 닉네임 수 K, 유저의 닉네임과 점수가 달성 순서대로 들어있는 배열 user_scores가 매개변수로 주어질 때,
// 랭킹 1페이지는 몇 번 바뀌는지 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// K는 1 이상 100 이하인 자연수입니다.
// user_scores의 길이는 1 이상 1,000 이하입니다.
// user_scores의 각 원소는 유저 닉네임과 해당 유저가 달성한 점수로 이루어진 문자열입니다.
// 유저 닉네임과 달성 점수는 "닉네임 점수" 형태의 문자열로 주어집니다.
// 닉네임과 점수는 공백(스페이스 바) 한 개로 구분되어 주어집니다.
// 닉네임은 알파벳 소문자와 숫자로만 이루어져 있으며, 길이는 1 이상 10 이하입니다.
// 점수는 숫자로만 이루어져 있으며, 길이는 1 이상 9 이하이고 0으로 시작하지 않습니다.
// 모든 유저는 닉네임 하나만 사용하며, 서로 다른 유저의 닉네임이 같은 경우는 없습니다.
// user_scores의 원소는 각 유저가 해당 점수를 달성한 순서대로 들어있습니다.
// 따라서 같은 점수를 동시에 달성한 유저는 없다고 가정해도 좋습니다.

// 입출력 예
// K	                                user_scores	                                                        result
// 3	["alex111 100", "cheries2 200", "coco 150", "luna 100", "alex111 120", "coco 300", "cheries2 110"]	4
// 3	["alex111 100", "cheries2 200", "alex111 200", "cheries2 150", "coco 50", "coco 200"]	              3
// 2	["cheries2 200", "alex111 100", "coco 150", "puyo 120"]                                             3

// scoreBoard 가 빈 배열로 시작, 하나씩 들어올 때마다 이전 상태와 비교
// ["alex111 100", "cheries2 200", "coco 150", "luna 100", "alex111 120", "coco 300", "cheries2 110"]

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

    // 이전 점수판과 다음 점수판의 유저 이름을 비교
    // 점수는 비교하지 않는 이유는
    //
    for (let i = 0; i < prev.length; i++) {
      if (prev[i].user !== next[i].user) {
        num++;
        return;
      }
    }
  };

  // 아래 while문 조건은, user_scores가 빈 배열일 때까지,
  // 즉, user_scores에서 앞에서부터 하나씩 빼서 temp에 넣을 거야
  while (user_scores.length > 0) {
    //
    // temp에 새로운 점수를 넣음
    temp.push(user_scores[0]);

    // 이전 상태보다 length가 하나 더 많아진 상태에서,
    // 점수를 기준으로 내림차순하고,
    temp.sort((a, b) => b.score - a.score);
    // 이름을 기준으로 필터링
    temp = temp
      .map(v => v.user)
      .filter((v, i, arr) => arr.indexOf(v) === i)
      .map(v => ({
        user: v,
        score: temp.find(w => w.user === v).score
      }));

    // 배열의 길이를 자름
    if (temp.length > k) temp.length = k; // arr = [1, 2, 3, 4]; arr.length = 2; => arr은 [1, 2]가 됨

    // -> 여기까지 새로운 점수가 들어간 점수판을 만든 것

    user_scores.shift();

    countNum(scoreBoard, temp);

    scoreBoard = [...temp];
  }

  return num;
}

console.log(solution(3, ["alex111 100", "cheries2 200", "coco 150", "luna 100", "alex111 120", "coco 300", "cheries2 110"]));
