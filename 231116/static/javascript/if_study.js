// 브라우저에 html태그가 모두 로드(화면표출) 되면 실행되는 스크립트 코드


// var user = Math.floor(Math.random()*6)+1;
// var com = Math.floor(Math.random()*6)+1;
window.onload=function(){


    // 조건문 - if문 , switch문
    // swith문 - 여러가지의 선택지를 제시 할 때 그 중 하나를 선택 하여 동작 시키는 것
    // break 를 사용 할려면 반복문 과 switch문 에서만 사용이 가능
    // if문에서 break를 넣게되면 오류가 생겨 사용을 할 수가 없다.
    // switch문 에서 default 값을 입력 하면 case에 없는 내용들이 입력이 될 때 실행이 되게 만들어 준다.
    // 마지막 문단에 넣어서 사용을 하는게 좋으며 break를 넣을 필요가 없다.

    // if( a==10 ){
    //     alert("같다");
    // }else{
    //     alert("같지않다");
    // }

    // var a = 234;
    // switch(a){
    //     case 1:
    //         alert("1");
    //         break;
    //     case 1000:
    //         alert("1000");
    //         break;
    //     case 234:
    //         alert("234");
    //         break;
    //     case 10:
    //         alert("10 선택");
    //         break;
    // }


    var airjordan=2;
    var airmax=97;
    var alp = "나이키 에어포스 90 재고";
    switch( alp.split(" ")[1] ){
        case "에어조던":
            document.write("현재 재고수량은 " + airjordan + "개");
            break;
        case "에어맥스":
            document.write("현재 재고수량은 " + airmax +"개");
            break;
        case "a":
            document.write("apple");
            break; 
        default:
            document.write("문의 내용 없음");
    }


    /*
    
    if( score>= 90)
    else if( score>=80){}
    else if( csore>=70){}
    else{}

    */

    var score = 89;
    switch( parseInt(score/10) ){
        case 10: case 9:
        document.write("A학점"); break;
        case 8:
        document.write("B학점"); break;
        case 7:
        document.write("C학점"); break;
        default :
        document.write("F학점");
    }








// 주사위 게임 만들기
// 컴퓨터와 주사위 게임을 한다.
// 각자 주사위 하나씩 던진다.   주사위 값이 큰쪽이 이긴다.


// var user = document.getElementById("user");
// var com = document.getElementById("com");

// user.addEventListener("click",function(){
//     if( user > com ){
//         alert("승리");
//     }else if( user < com ){
//         alert("패배");
//     }else{
//         alert("비김");
//     }
//     user = Math.floor(Math.random()*6)+1;
//     com = Math.floor(Math.random()*6)+1;
// })
// com.addEventListener("click",function(){
//     if( user < com ){
//         alert("패배");
//     }else if( user > com ){
//         alert("승리");
//     }else{
//         alert("비김");
//     }
//     user = Math.floor(Math.random()*6)+1;
//     com = Math.floor(Math.random()*6)+1;
// })

// 컴퓨터와 주사위 게임을 한다.
// 각자 주사위 두개씩 던진다.   주사위 합이 큰족이 이긴다.
// 단, 두주사위값이 같은 숫자가 나온쪽이 이긴다.
// 둘다 같은숫자가 나온다면 합이 큰쪽이 이긴다.

// var user1 = Math.floor(Math.random()*6)+1;
// var user2 = Math.floor(Math.random()*6)+1;
// var com1 = Math.floor(Math.random()*6)+1;
// var com2 = Math.floor(Math.random()*6)+1;

// var user = user1 + user2 ;
// var com = com1 + com2 ;

// if( user > com){
//     if( (com1 == com2) && (user1 != user2) ){
//         alert("패");
//     }else{
//         alert("승");
//     }
// }else if( user < com ){
//     if( (user1==user2) && (com1 != com2) ){
//         alert("승");
//     }else{
//         alert("패");
//     }
// }else{
//     if( (user1==user2) && (com1 != com2) ){
//         alert("승");
//     }else if( (user1!=user2) && (com1==com2) ){
//         alert("패");
//     }else{
//         alert("무");
//     }
// }





// if( ((user1+user2) == (com1+com2)) ){
//     alert("무승부");
//     document.write("유저1 : " + user1 + " 유저2 : " +  user2 + " 합계 : " + user + "<br>");
//     document.write("컴터1 : " + com1 + " 컴터2 : " +  com2 + " 합계 : " + com);
//     document.write("<br> 무승부");
// }else if( (user1+user2) > (com1+com2) || (user1==user2) > (com1+com2) || (user1==user2) > (com1==com2)){
//     alert("승리");
//     document.write("유저1 : " + user1 + " 유저2 : " +  user2 + " 합계 : " + user + "<br>");
//     document.write("컴터1 : " + com1 + " 컴터2 : " +  com2 + " 합계 : " + com);
//     document.write("<br> 유저의 승리");
// }else{
//     alert("패배");
//     document.write("유저1 : " + user1 + " 유저2 : " +  user2 + " 합계 : " + user + "<br>");
//     document.write("컴터1 : " + com1 + " 컴터2 : " +  com2 + " 합계 : " + com);
//     document.write("<br> 유저의 패배");
// }












};







