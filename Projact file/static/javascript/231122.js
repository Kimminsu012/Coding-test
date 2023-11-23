// 과제
// 한화이글스 투수들의 평균자책점
// name = ["주현상","윤대경","이민우","이태양","페냐","박상원","장시환"]
// era = [1.96 , 2.45 , 2.63 , 3.23 , 3.60 , 3.65 , 3.38]
// era -> 평균자책점 (입력할 필요 없음)
// 7명 선수들의 평균자책점의 평균치를 구하시오
// 평균치 이상인 선수들이 누구인지 출력하세요



const names = ["주현상","윤대경","이민우","이태양","페냐","박상원","장시환"];
const era = [1.96 , 2.45 , 2.63 , 3.23 , 3.60 , 3.65 , 3.38];
let idx = new Array();
let t_idx = new Array();
let total_up = new Array();
let avg = 0;
let total = 0;
let nt = new Array();



// for(var i=0; i<names.length; i++){
//     idx.push(names[i]);
// }document.write(idx + "<br>");

// for(var i=0; i<era.length; i++){
//     t_idx.push(era[i]);
// }document.write(t_idx + "<br>");

// for(var i=0; i<era.length; i++){
//     total += era[i];
//     avg = total/era.length;
// }document.write("평균 : " + avg + "<br>");

// for(var i=0; i<names.length; i++){
//     nt[i] = names[i] + era[i]; 합칠려면 concat을 사용
// }document.write(nt + "<br>");

// for(var i=0; i<names.length; i++){
//     if(avg<era[i]){
//         total_up.push(names[i]);
//     }document.write(total_up);
// }



for(var i=0; i<era.length; i++){
    total += era[i];
    avg = total/era.length;
}document.write("평균 : " + avg + "<br>");


for(var i=0; i<names.length; i++){
    if(era[i]>=avg){
        idx.push(names[i]);
        total_up.push(era[i]);
    }
}
document.write("이름 : " + idx + "<br>" + "실책점 : " + total_up);

// const names = ["주현상","윤대경","이민우","이태양","페냐","박상원","장시환"];
// const era = [1.96 , 2.45 , 2.63 , 3.23 , 3.60 , 3.65 , 3.38];
// let idx = new Array();
// let total = 0; // 평균자책점(era)의 총점을 구하기 위한 누적 변수



// for(var i=0; i<era.length; i++){
//     total += era[i]; // total = total + era[i] // 평균자책점(era) 총점구하기
    
// }

// let avg = total/era.length; // 평균 자책점(era) 평균 구하기

// for(var i=0; i<names.length; i++){
//     if(era[i]>=avg){ // era의 평균이상인 값 찾기
//         document.write( names[i] + " "); // era 평균이상인 값의 인덱스를 name의 인덱스로사용
//     }
// }