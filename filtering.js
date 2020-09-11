let thanos;

function filteringToName() {
  let selectedName = event.target.textContent;
  console.log(selectedName);

  let commentList = document.querySelector("#commentlist");

  thanos = tweetsOnScreen.filter(function(tweet){
    return tweet.user === selectedName;
  });

  thanos;
 
  while(commentList.firstChild) {
    commentList.removeChild(commentList.lastChild);
  };

  for(index = 0; index < thanos.length; index += 1) {
    selectedNameTweet(index);
  };

  document.querySelector('#refresh').textContent = 'RETURN !'
  document.querySelector('#refresh').removeEventListener('click', newRandomTweet);
  document.querySelector('#refresh').addEventListener('click', returnToMain);
};

function returnToMain() {
    document.querySelector('#refresh').textContent = 'Check New Tweet !';
    let refreshImg = document.createElement('IMG');
    document.querySelector('#refresh').prepend(refreshImg);
    refreshImg.src = 'img/refresh.png';
    document.querySelector('#refresh').removeEventListener('click', returnToMain);
    document.querySelector('#refresh').addEventListener('click', newRandomTweet);
    

    let commentList = document.querySelector("#commentlist");
    while(commentList.firstChild) {
        commentList.removeChild(commentList.lastChild);
    };
    
    for(index = 0; index < tweetsOnScreen.length; index += 1) {
        reMadeTweet(index);
    };
};



function selectedNameTweet(index) {
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
  newName.textContent = thanos[index].user;
  //시간
  let newDate = document.createElement('SPAN');
  newComment.appendChild(newDate);
  newDate.classList.add("date");
  newDate.textContent = thanos[index].created_at;
  //댓글
  let newCmt = document.createElement('DIV');
  newComment.appendChild(newCmt);
  newCmt.classList.add("cmt");
  newCmt.textContent = thanos[index].message;
  //좋아요
  let newLike = document.createElement('BUTTON');
  newComment.appendChild(newLike);
  newLike.classList.add("thumb2");
  newLike.addEventListener("click", likeCounter);
  //좋아요 수
  let likeNum = document.createElement('SPAN');
  newComment.appendChild(likeNum);
  likeNum.classList.add("likenum");
  likeNum.textContent = thanos[index].likenum;
  //싫어요
  let newDisLike = document.createElement('BUTTON');
  newComment.appendChild(newDisLike);
  newDisLike.classList.add("thumb");
  newDisLike.addEventListener("click", disLikeCounter);
  //싫어요 수
  let disLikeNum = document.createElement('SPAN');
  newComment.appendChild(disLikeNum);
  disLikeNum.classList.add("dislikenum");
  disLikeNum.textContent = thanos[index].dislikenum;
  //고유넘버
  let tweetSerialNum = document.createElement('SPAN');
  newComment.appendChild(tweetSerialNum);
  tweetSerialNum.classList.add("serial");
  tweetSerialNum.textContent = thanos[index].serial;
};


function reMadeTweet(index) {
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
    newName.textContent = tweetsOnScreen[index].user;
    newName.addEventListener('click', filteringToName);
    //시간
    let newDate = document.createElement('SPAN');
    newComment.appendChild(newDate);
    newDate.classList.add("date");
    newDate.textContent = tweetsOnScreen[index].created_at;
    //댓글
    let newCmt = document.createElement('DIV');
    newComment.appendChild(newCmt);
    newCmt.classList.add("cmt");
    newCmt.textContent = tweetsOnScreen[index].message;
    //좋아요
    let newLike = document.createElement('BUTTON');
    newComment.appendChild(newLike);
    newLike.classList.add("thumb2");
    newLike.addEventListener("click", likeCounter);
    //좋아요 수
    let likeNum = document.createElement('SPAN');
    newComment.appendChild(likeNum);
    likeNum.classList.add("likenum");
    likeNum.textContent = tweetsOnScreen[index].likenum;
    //싫어요
    let newDisLike = document.createElement('BUTTON');
    newComment.appendChild(newDisLike);
    newDisLike.classList.add("thumb");
    newDisLike.addEventListener("click", disLikeCounter);
    //싫어요 수
    let disLikeNum = document.createElement('SPAN');
    newComment.appendChild(disLikeNum);
    disLikeNum.classList.add("dislikenum");
    disLikeNum.textContent = tweetsOnScreen[index].dislikenum;
    //고유넘버 
    let tweetSerialNum = document.createElement('SPAN');
    newComment.appendChild(tweetSerialNum);
    tweetSerialNum.classList.add("serial");
    tweetSerialNum.textContent = tweetsOnScreen[index].serial;
  };



  



