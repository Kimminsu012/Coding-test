// 과제
// 한화이글스 투수들의 평균자책점
// name = ["주현상","윤대경","이민우","이태양","페냐","박상원","장시환"]
// era = [1.96 , 2.45 , 2.63 , 3.23 , 3.60 , 3.65 , 3.38]
// era -> 평균자책점 (입력할 필요 없음)
// 7명 선수들의 평균자책점의 평균치를 구하시오
// 평균치 이상인 선수들이 누구인지 출력하세요



const names = ["주현상","윤대경","이민우","이태양","페냐","박상원","장시환"];
const era = [1.96 , 2.45 , 2.63 , 3.23 , 3.60 , 3.65 , 3.38];
let n_idx = new Array();
let t_idx = new Array();
let total_up = new Array();
let avg = 0;
let total = 0;
let nt = new Array();



for(var i=0; i<names.length; i++){
    n_idx.push(names[i]);
}document.write(n_idx + "<br>");

for(var i=0; i<era.length; i++){
    t_idx.push(era[i]);
}document.write(t_idx + "<br>");

for(var i=0; i<era.length; i++){
    total += era[i];
    avg = total/era.length;
}document.write("평균 : " + avg + "<br>");

for(var i=0; i<names.length; i++){
    nt[i] = names[i] + era[i];
}document.write(nt + "<br>");

for(var i=0; i<names.length; i++){
    if(avg<era[i]){
        total_up.push(names[i]);
    }document.write(total_up);
}

