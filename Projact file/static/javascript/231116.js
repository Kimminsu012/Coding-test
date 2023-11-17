// 과제
// 주차비 정산
// apple주차장의 주차요금 표
// 기본 주차비 - 1000원, 기본 시간 - 30분
//( 30분 이내 주차시 1000원, 5분 주차해도 1000원, 39분까지 1000원)
// 10분당 100원씩 추가 ( 40분 주차시 1100원, 54분 주차시 1200원 )
// 2시간 이상 주차시 기본요금 변경
// 기본 요금 1500원
// 4시간 이상 주차시 기본요금 변경
// 2500원
// 8시간 이상 주차시 요금은 무조건 10000원
// (10시간, 12시간, 9시간 43분 전부다 10000원)

// (2시간 1분 주차시 - 1500원, 2시간 34분 주차시 - 1800원)
// 주차시간을 분단위로 입력하여 주차요금이 얼마인지 출력하시오


var min = parseInt(prompt("주차한 시간을 입력 하시오 (분단위)"));
var money = 1000

if( min >= 480 ){
    money=10000; min=0;
}else if( min >= 240 ){
    money=2500; min = min-240;
}else if( min >= 120 ){
    money=1500; min = min-120;
}else{
    min = min < 30 ? 0 : min-30;
}

var price = Math.floor(min/10)*100 + money;
document.write("주차요금 : " + price + "원");













// if( min <= 30 ){
//     document.write(money) ;
// }else if((min < 120) ){
//     min = parseInt(min-30);
//     money = parseInt(min / 10) * 100 + money;
//     document.write(money) ;
//     }else if( ( min < 240 ) ){
//         min = parseInt(min-120);
//         money = 1500;
//         money = parseInt(min / 10) * 100 + money;
//         document.write(money) ;
//     }else if((min < 480) ){
//         min = parseInt(min-240);
//         money = 2500
//         money = parseInt(min / 10) * 100 + money;
//         document.write(money);
//     }else if( min >= 480 ){
//         money = 10000
//         document.write(money);
// }
