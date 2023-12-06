
// let num = [10,20,30,40,50,60];

// num 배열에 10단위로 100까지 숫자를 추가로 저장하세요.

// num.push(70);
// num.push(80);
// num.push(90);
// num.push(100);

// num 배열에 저장된 숫자를 한줄 씩 출력 하세요. ( 반복문 사용 )

// for(var i=0; i<num.length; i++){
//     document.write(num[i]+"<br>");
// }

// num 배열에 저장된 숫자들에게 +3을 해주고 결과를 출력하세요

// for(var i=0; i<num.length; i++){
//     document.write(num[i]+3+"<br>");
//     // if(num[i]%10==0){
//     //     num[i] = num[i]+3;
//     // }document.write(num[i]+"<br>");
// }

// num 배열에서 55보다 큰 숫자들만 출력하세요

// for(var i=0; i<num.length; i++){
//     if(num[i]>55){
//         document.write(num[i]+" ");
//     }
// }

let num1 = [1,2,3];
let num2 = [4,5,6];

// 두배열에 같은 인덱스위치에 있는 숫자들끼리의 합을 출력하세요
// 결과 - 5 7 9

let num = new Array();

for(var i=0; i<num1.length; i++){
    // document.write( (num1[i]+num2[i]) + "  ");
    num[i] = num1[i] + num2[i];
}document.write(num+"<br>");

// num1과 num2 배열에서 짝수에 해당하는 숫자만 
// num3 이라는 배열에 저장하고 출력

let num3 = new Array();

for(var i=0; i<num1.length; i++){
    if(num1[i]%2==0){
        num3.push(num1[i]);
    }
    if(num2[i]%2==0){
        num3.push(num2[i]);
    }
}
document.write(num3.sort());

// for(var i=0; i<num1.length; i++){
//     if(num1[i]%2==0){
//         num3.push(num1[i]);
//     }
// }
// for(var i=0; i<num2.length; i++){
//     if(num2[i]%2==0){
//         num3.push(num2[i]);
//     }
// }
// document.write(num3);