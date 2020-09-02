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
/* 유저네임, 코멘트를 객체로 받아와서 내보내기 */
function getInputVal() {
    /* 유효성 검사 */
    if(checkUserName() && checkComment()) {
    
        /* 현재 시간 */
        let year = new Date().getFullYear();
        let month = new Date().getMonth() + 1;
        let day = new Date().getDate();
        let hour = new Date().getHours();
        let minute = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        let nowDate = year + '-0' + month + '-0' + day + ' ' + hour + ':' +
        minute + ':' + seconds;

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
        //싫어요
        let newDisLike = document.createElement('BUTTON');
        newComment.appendChild(newDisLike);
        newDisLike.classList.add("thumb");
         //좋아요 이미지
        let thumbsUp = document.createElement('IMG');
        thumbsUp.setAttribute("src", "img/thumbs_up.png");
        newLike.appendChild(thumbsUp);
        //싫어요 이미지
        let thumbsDown = document.createElement('IMG');
        thumbsDown.setAttribute("src", "img/thumbs_down.png");
        newDisLike.appendChild(thumbsDown);
    };
};