/* if문 - 조건식의 참,거짓에의해 내용을 실행 시킨다.
if( 조건식 ){
    참일 경우 실행할 내용
}else{
    거짓일 경우 실행할 내용
}
if 뒤에 작은괄호 열어서 안에 조건시을 작성한다. 조건식 뒤에는 중괄호를 열어서
안에 참일 경우 실행할 내용을 작성한다.

조건식이 거짓이라면 첫 번째 중괄호는 건너뛰고(jmp) else 뒤의 중괄호를 실행 시킨다.
if 문에서 조건식 작성할 수 있는 곳은 오직 if 뒤에만 가능하다.
else 뒤에는 조건식을 넣을 수 없다.

조건에 따라 실행될 내용이 여러개 라면 ( 3개 이상)
if( 조건식 ){
    내용
}else{
    if( 조건식 ){
        내용
    }else{
    내용
    내용
    }
}

속도를 높일때
if( 조건식 ){
    내용
}else if( 조건식 ){
    내용
}else{
    내용
    내용
}

*/

// var num = 20; // num 이라는 변수 공간에 20을 저장해라.

// 조건연사자일 경우 (num>0) ? console.log("양수다") : console.log("음수다");

// if( num > 0 ){
//     console.log("양수다");
// }else{
//     console.log("음수다");
// }

// var birth = parseInt(prompt("생년월일(8자리) 입력"));
// // birth = 19991204
// if ( birth <= 20041231 ){
//     console.log("성인입니다.");
// }else{
//     console.log("미성년자 입니다.");
// }


//국어, 영어, 수학 3과목 점수 입력받기
// 3과목의 평균점수가 65점 이상이면 통과 라고 출력
// 65점 미만이면 낙제 라고 출력 하시오.


// var kor = parseInt(prompt("국어 시험점수를 입력하시오"));
// var eng = parseInt(prompt("영어 시험점수를 입력하시오"));
// var math = parseInt(prompt("수학 시험점수를 입력하시오"));

// var result = (kor + eng + math) / 3;

// if( result >= 65 ){
//     console.log("합격");
// }else{
//     console.log("불합격");
// }


// 동전 앞면 뒷면 맞추기

// 선택자를 쓸 때
// css 선택자 - id = # , class = .
// javascript html 선택방법
// javascript 코딩을 하여 나타낼때 순서가 제일 중요하다.
// css 동작 시점은 javascript랑 다르다.
// css는 페이지에 모든것들이 생성 된 이후 작동이 되는 것
// javascript는 페이지가 동작되기 전 작성된 순서에 맞춰서 작동이 되는 것
// script는 head안에 넣는게 표준이지만 표준을 지키지 않아도 된다.
// head안에 넣은 script를 순서를 바꾸는 법 
// 브라우저에 html태그가 모두 로딩(화면표시)되면 자바스크립트 코드를 실행시키는 방법
// window.onload=function(){} - 중괄호 안에 코드를 넣어야 html태그가 로딩 된 후 script가 실행된다.
// 현재 사용 되는 용어를 이벤트 핸들러 라고 한다. (코드의 실행을 제어)
// 1. 첫번째 id 가져오는 방법
// document.getElementById(""); - 매번 선택을 할때마다 똑같이 써야한다.
// 변수에 저장을 하면 짧게 사용이 가능하다.
window.onload=function(){

    document.getElementById("scissors");
    document.getElementById("rock");
    document.getElementById("paper");

    // 가위 바위 보 게임 만들기
    // 1. 가위 2. 바위 3. 보
    
    // var com = Math.floor(Math.random()*3)+1;
    // var you = parseInt(prompt("1.가위 2.바위 3.보"));

    // if ( you == com ){
    //     alert("비겼습니다");
    // }else if( you - com == 1 || you - com == -2){
    //     alert("이겼습니다");
    // }else{
    //     alert("졌습니다.");
    // }

    // if ( com == you){
    //     alert("비김");
    // }else if( (com==1&&you==2) || (com==2&&you==3) || (com==3&&you==1) ){
    //     alert("승");
    // }else{
    //     alert("패");
    // }





    // 세개의 정수를 입력받아 가장 작은수 출력 , 모두 같다면 같다 출력
    // var num1 = parseInt(prompt("첫번째 정수"));
    // var num2 = parseInt(prompt("두번째 정수"));
    // var num3 = parseInt(prompt("세번째 정수"));
    
    // if( num1 == num2 && num1 == num3){
    //     alert("모두 같은 숫자");
    // }else if( num1 < num2 && num1 < num3){
    //     alert("작은수 : " + num1);
    // }else if( num2 < num3){
    //     alert("작은수 : " + num2);
    // }else{
    //     alert("작은수 : " + num3);
    // }



    // if( num1 < num2 ){
    //     if( num1 < num3){
    //         alert("작은수 : " + num1);
    //     }else{
    //         alert("작은수 : " + num3);
    //     }
    // }else if( num2 < num3 ){
    //     alert("작은수 : " + num2);
    // }else{
    //     alert("작은수 : " + num3);
    // }



    // var coin = Math.floor(Math.random()*2)+1;

    // // 1. 첫번째 id 가져오는 방법
    // var front = document.getElementById("front");
    // var back = document.getElementById("back");

    // front.addEventListener("click", function(){
    //     if( coin == 1 ){
    //         alert(" 정답 ");
    //     }else{
    //         alert(" 틀림 ");
    //     }
    //     // alert(" 앞면 선택 "); // alert는 알림창을 나타내는 함수이다.
    // });

    // back.addEventListener("click", function(){
    //     if( coin == 2 ){
    //         alert(" 정답 ");
    //     }else{
    //         alert(" 틀림 ");
    //     }
        // alert(" 뒷면 선택 ");
    // });

};
// .innerText=""; - 선택된 곳에 글씨를 넣는 방법 (해당 이미지나 다른것들을 지우고 덮어 씌우는 명령어)
// 실행을 하게 하는 방법
// 1. html 태그안에 넣어서 직접 지정을 할 수 있다.
// 2. javascript에서 선택을 한 후 기능을 넣어 줄 수 있다.
// front.addEventListener("click", function() - html에서 onclick 한 것과 동일


