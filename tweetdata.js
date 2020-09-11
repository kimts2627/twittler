///////////* 트윗담는 DB *////////////
// 생성된 모든 트윗들 DB로 저장
let tweetsOnScreen = [];

// 최초 시작 트윗
var firstTimeDummy = [
  { user: '심수진', message: '나는 바보다', created_at: '1995-07-08 00:00:20' },
  { user: '김태수', message: '안녕하세요, 김태수 입니다.', created_at: '1996-01-19 01:30:20' },
  { user: '이정민', message: '안녕하세요, 이정민 입니다.', created_at: '2020-01-07 18:30:20' },
  { user: '김코딩', message: '안녕하세요, 김코딩 입니다.', created_at: '2020-03-03 12:30:20' },
  { user: '박해커', message: '안녕하세요, 박해커 일까요?', created_at: '2020-05-04 18:55:20' }
];

// 랜덤 트윗 이름, 메세지
var randomUser = ['김태수', '이정민', '심수진', '김코딩', '박해커', 'Trump'];
var randomMessage = [
  '이 헌법공포 당시의 국회의원의 임기는 제1항에 의한 국회의 최초의 집회일 전일까지로 한다.',
  '헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다.',
  '헌법개정은 국회재적의원 과반수 또는 대통령의 발의로 제안된다.',
  '모든 국민은 직업선택의 자유를 가진다. 군인은 현역을 면한 후가 아니면 국무총리로 임명될 수 없다.',
  '민주평화통일자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다.',
  '국회는 국정을 감사하거나 특정한 국정사안에 대하여 조사할 수 있다.',
  '인간이 얼음에 고행을 따뜻한 가장 이것이다. 꽃이 곧 동력은 끝에 동산에는 그것은 거선의 별과 인생의 것이다.',
  '새 가슴에 있는 만천하의 있다. 몸이 뜨거운지라, 청춘의 소리다.이것은 같으며, 피다.',
  '귀는 우리는 피에 무엇이 이것이다. 구하지 우리는 그들은 약동하다.'
];

// 랜덤 인덱스 생성
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

// 랜덤 트윗 조합
let tweet = {};
function generateNewTweet() {
  tweet.user = randomUser[getRandomInt(0, randomUser.length)];
  tweet.message = randomMessage[getRandomInt(0, randomMessage.length)];
  tweet.created_at = new Date();
  return tweet;
};

// 새로고침 할때마다 새 랜덤 트윗
document.querySelector('#refresh').addEventListener('click', newRandomTweet);

function newRandomTweet() {
  generateNewTweet()
  timeChecker();
      //UL을 선언
      let commentList = document.querySelector("#commentlist");
      //나눔줄
      let newLine = document.createElement('HR');
      commentList.prepend(newLine);
      //새 LI를 만든 후 UL의 자식으로 삽입, 클래스 할당
      let newComment = document.createElement('LI');
      commentList.prepend(newComment);
      newComment.classList.add("FooterBox");
      //LI의 자식 요소들 생성 후 삽입 및 클래스 할당
      //이름
      let newName = document.createElement('SPAN');
      newComment.appendChild(newName);
      newName.classList.add("name");
      newName.textContent = tweet.user;
      newName.addEventListener('click', filteringToName);
      //시간
      let newDate = document.createElement('SPAN');
      newComment.appendChild(newDate);
      newDate.classList.add("date");
      newDate.textContent = nowDate;
      //댓글
      let newCmt = document.createElement('DIV');
      newComment.appendChild(newCmt);
      newCmt.classList.add("cmt");
      newCmt.textContent = tweet.message;
      //좋아요
      let newLike = document.createElement('BUTTON');
      newComment.appendChild(newLike);
      newLike.classList.add("thumb2");
      newLike.addEventListener("click", likeCounter);
      //좋아요 수
      let likeNum = document.createElement('SPAN');
      newComment.appendChild(likeNum);
      likeNum.classList.add("likenum");
      likeNum.textContent = '0';
      //싫어요
      let newDisLike = document.createElement('BUTTON');
      newComment.appendChild(newDisLike);
      newDisLike.classList.add("thumb");
      newDisLike.addEventListener("click", disLikeCounter);
      //싫어요 수
      let disLikeNum = document.createElement('SPAN');
      newComment.appendChild(disLikeNum);
      disLikeNum.classList.add("dislikenum");
      disLikeNum.textContent = '0';
      //트윗 고유넘버 생성
      let tweetSerialNum = document.createElement('SPAN');
      newComment.appendChild(tweetSerialNum);
      tweetSerialNum.classList.add("serial");
      tweetSerialNum.textContent = tweetSerial0 + Math.floor(Math.random() * (99999 - 10000));
      //DB에 저장
      tweetsOnScreen.push({user: tweet.user, message: tweet.message,
                           created_at: nowDate, likenum: likeNum.textContent,
                           dislikenum: disLikeNum.textContent, serial: tweetSerialNum.textContent});
};

// 기본 시작 트윗
function startTweet(index) {
      //UL을 선언
      let commentList = document.querySelector("#commentlist");
      //나눔줄
      let newLine = document.createElement('HR');
      commentList.prepend(newLine);
      //새 LI를 만든 후 UL의 자식으로 삽입, 클래스 할당
      let newComment = document.createElement('LI');
      commentList.prepend(newComment);
      newComment.classList.add("FooterBox");
      //LI의 자식 요소들 생성 후 삽입 및 클래스 할당
      //이름
      let newName = document.createElement('SPAN');
      newComment.appendChild(newName);
      newName.classList.add("name");
      newName.textContent = firstTimeDummy[index].user;
      newName.addEventListener('click', filteringToName);
      //시간
      let newDate = document.createElement('SPAN');
      newComment.appendChild(newDate);
      newDate.classList.add("date");
      newDate.textContent = firstTimeDummy[index].created_at;
      //댓글
      let newCmt = document.createElement('DIV');
      newComment.appendChild(newCmt);
      newCmt.classList.add("cmt");
      newCmt.textContent = firstTimeDummy[index].message;
      //좋아요
      let newLike = document.createElement('BUTTON');
      newComment.appendChild(newLike);
      newLike.classList.add("thumb2");
      newLike.addEventListener("click", likeCounter);
      //좋아요 수
      let likeNum = document.createElement('SPAN');
      newComment.appendChild(likeNum);
      likeNum.classList.add("likenum");
      likeNum.textContent = Math.floor(Math.random() * (500 - 0));
      //싫어요
      let newDisLike = document.createElement('BUTTON');
      newComment.appendChild(newDisLike);
      newDisLike.classList.add("thumb");
      newDisLike.addEventListener("click", disLikeCounter);
      //싫어요 수
      let disLikeNum = document.createElement('SPAN');
      newComment.appendChild(disLikeNum);
      disLikeNum.classList.add("dislikenum");
      disLikeNum.textContent = Math.floor(Math.random() * (100 - 0));
      //트윗 고유넘버 생성
      let tweetSerialNum = document.createElement('SPAN');
      newComment.appendChild(tweetSerialNum);
      tweetSerialNum.classList.add("serial");
      tweetSerialNum.textContent = tweetSerial0 + Math.floor(Math.random() * (99999 - 10000));
      //DB에 저장
      tweetsOnScreen.push({user: newName.textContent, message: newCmt.textContent, 
                           created_at: newDate.textContent, likenum: likeNum.textContent,
                           dislikenum: disLikeNum.textContent, serial: tweetSerialNum.textContent});
};

// 기본 시작 트윗 5개 자동실행
(function () {
  for(index = 0; index < 5; index += 1) {
    startTweet(index);
  };
}());














