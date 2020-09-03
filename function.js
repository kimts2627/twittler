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
function getInputVal() {
    /* 유효성 검사 */
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
        newName.innerHTML = userNameVal.value;
        //시간
        let newDate = document.createElement('SPAN');
        newComment.appendChild(newDate);
        newDate.classList.add("date");
        newDate.innerHTML = nowDate;
        //댓글
        let newCmt = document.createElement('DIV');
        newComment.appendChild(newCmt);
        newCmt.classList.add("cmt");
        newCmt.innerHTML = commentVal.value;
        //좋아요
        let newLike = document.createElement('BUTTON');
        newComment.appendChild(newLike);
        newLike.classList.add("thumb2");
        newLike.addEventListener("click", likeCounter2);
        //좋아요 수
        let likeNum = document.createElement('SPAN');
        newComment.appendChild(likeNum);
        likeNum.classList.add("likenum");
        likeNum.innerHTML = '0';
        //싫어요
        let newDisLike = document.createElement('BUTTON');
        newComment.appendChild(newDisLike);
        newDisLike.classList.add("thumb");
        newDisLike.addEventListener("click", disLikeCounter2);
        //싫어요 수
        let disLikeNum = document.createElement('SPAN');
        newComment.appendChild(disLikeNum);
        disLikeNum.classList.add("dislikenum");
        disLikeNum.innerHTML = '0';
    };
};

/* 좋아요 싫어요 카운트 머신 */
function likeCounter() {
    event.target.nextSibling.nextSibling.innerHTML = 
    Number(event.target.nextSibling.nextSibling.innerHTML) + 1
    console.log(event.target.nextSibling.nextSibling)
}

function disLikeCounter() {
    event.target.nextSibling.nextSibling.innerHTML = 
    Number(event.target.nextSibling.nextSibling.innerHTML) + 1
    console.log(event.target.nextSibling.nextSibling)
}

/* 좋/싫 머신 뉴코멘트 버전 */
function likeCounter2() {
    event.target.nextSibling.innerHTML = 
    Number(event.target.nextSibling.innerHTML) + 1
    console.log(event.target.nextSibling)
}

function disLikeCounter2() {
    event.target.nextSibling.innerHTML = 
    Number(event.target.nextSibling.innerHTML) + 1
    console.log(event.target.nextSibling)
}