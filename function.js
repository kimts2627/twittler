/* 각각의 버튼 및 텍스트 박스(혹은 그의 값) 선언 */
let userNameVal = document.querySelector(".UserNameBox")
let commentVal = document.querySelector(".CommentBox")

function checkUserName() {
    if(userNameVal.value.length < 11 && userNameVal.value.length > 2) {
        alert("댓글이 등록 되었습니다!");
    } else {
        alert("유저네임은 3글자 이상 10글자 이하 입니다~! 바보");
    }
} 