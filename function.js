
// 시리얼 선언
let tweetSerial0 = 0;

document.querySelector('.mainButton').addEventListener('click', makeMyTweet);


/* 각각의 버튼 및 텍스트 박스(혹은 그의 값) 선언 */
let userNameVal = document.querySelector(".UserNameBox")
let commentVal = document.querySelector(".CommentBox")

/* 유저네임 길이 판별 */
function checkUserName() {
    if(userNameVal.value.length < 11 && userNameVal.value.length > 2) {
        return true;
    } else {
        alert("유저네임은 3글자 이상 10글자 이하 입니다!");
    }
} 

/* 코멘트 작성 여부 판별 */
function checkComment() {
    if(commentVal.value.length > 0) {
        return true;
    } else {
        alert("댓글을 작성해 주세요");
    }
}

/* 현재시간 메이커 */
function timeChecker() {
    let year = new Date().getFullYear();
    function month() {
        if((new Date().getMonth() + 1) < 10) {
            return '0' + (new Date().getMonth() + 1);
        } else {
            return new Date().getMonth() + 1;
        }
    };
    function day() {
        if(new Date().getDate() < 10) {
            return '0' + new Date().getDate();
        } else {
            return new Date().getDate();
        }
    };
    function hour() {
        if(new Date().getHours() < 10) {
            return '0' + new Date().getHours();
        } else {
            return new Date().getHours();
        }
    };
    function minute() {
        if(new Date().getMinutes() < 10) {
            return '0' + new Date().getMinutes();
        } else {
            return new Date().getMinutes();
        }
    };
    function seconds() {
        if(new Date().getSeconds() < 10) {
            return '0' + new Date().getSeconds();
        } else {
            return new Date().getSeconds();
        }
    };
    nowDate = year + '-' + month() + '-' + day() + ' ' + hour() + ':' +
    minute() + ':' + seconds();
}        

/* 유저네임, 코멘트를 객체로 받아와서 내보내기 */
function makeMyTweet() {
    /* 필터링 된 페이지 일시 트윗 금지 */
    if(document.querySelector('#refresh').textContent === 'RETURN !') {
        userNameVal.value = '';
        commentVal.value = '';
        return alert('메인 페이지에서 작성해 주세요!')
    }

    if(checkUserName() && checkComment()) {
        nowDate = undefined;
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
        newName.textContent = userNameVal.value;
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
        newCmt.textContent = commentVal.value;
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
        tweetsOnScreen.push({user: userNameVal.value, message: commentVal.value, 
        created_at: nowDate, likenum: likeNum.textContent, 
         dislikenum: disLikeNum.textContent, serial: tweetSerialNum.textContent});
        //입력창 청소
        userNameVal.value = '';
        commentVal.value = '';
    };
};



/* 좋/싫 머신 */
function likeCounter() {
    event.target.nextSibling.textContent = 
    Number(event.target.nextSibling.textContent) + 1;
    console.log(event.target.nextSibling);

    for(let i = 0; i < tweetsOnScreen.length; i ++) {
        if(tweetsOnScreen[i].serial === event.target.parentElement.lastChild.textContent) {
            console.log("up!")
            tweetsOnScreen[i].likenum = String(Number(tweetsOnScreen[i].likenum) + 1);
        };
    };
};

function disLikeCounter() {
    event.target.nextSibling.textContent = 
    Number(event.target.nextSibling.textContent) + 1;
    console.log(event.target.nextSibling);

    for(let i = 0; i < tweetsOnScreen.length; i ++) {
        if(tweetsOnScreen[i].serial === event.target.parentElement.lastChild.textContent) {
            console.log("up!")
            tweetsOnScreen[i].dislikenum = String(Number(tweetsOnScreen[i].dislikenum) + 1);
        };
    };
};