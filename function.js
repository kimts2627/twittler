/* 각각의 버튼 및 텍스트 박스(혹은 그의 값) 선언 */
let userNameVal = document.querySelector(".UserNameBox")
let commentVal = document.querySelector(".CommentBox")

/* 유저네임 길이 판별 */
function checkUserName() {
    if(userNameVal.value.length < 11 && userNameVal.value.length > 2) {
        alert("댓글이 등록 되었습니다!");
    } else {
        alert("유저네임은 3글자 이상 10글자 이하 입니다~! 바보");
    }
} 

/* 현재 시간 */
const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();
const hour = new Date().getHours();
const minute = new Date().getMinutes();
const seconds = new Date().getSeconds();

let nowDate = year + '-0' + month + '-0' + day + ' ' + hour + ':' +
minute + ':' + seconds;

/* 좋아요 싫어요*/
let like = new Image();
img.src = "img/thumbs_up.png";

let disLike = new Image();
img.src = "img/thumbs_down.png";

/* 유저네임, 코멘트를 객체로 받아와서 내보내기 */
function getInputVal() {
    //UL을 선언
    let commentList = document.querySelector("#commentlist");
    //나눔줄
    let newLine = document.createElement('HR');
    commentList.appendChild(newLine);
    //새 LI를 만든 후 UL의 자식으로 삽입, 클래스 할당
    let newComment = document.createElement('LI');
    commentList.appendChild(newComment);
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
        newDate.innerHTML = nowDate
        //댓글
        let newCmt = document.createElement('DIV');
        newComment.appendChild(newCmt);
        newCmt.classList.add("cmt");
        newCmt.innerHTML = commentVal.value;
        //좋아요
        let newLike = document.createElement('BUTTON');
        newComment.appendChild(newLike);
        newLike.classList.add("thumb2");
        newLike.innerHTML = like;
        //싫어요
        let newDisLike = document.appendChild('BUTTON');
        newComment.appendChild(newDisLike);
        newDisLike.classList.add("thumb");
        newDisLike.innerHTML = disLike;

};