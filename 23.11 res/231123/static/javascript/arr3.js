const store = ["슈펜","니꼴밀러","피에르가르뎅","엘칸토","미쏘",
"치크","뉴발란스","애슐리","자연별곡","코코몽키즈랜드"]

const floor = [1 , 1 , 1, 4 , 3 , 5 , 2 , 7 , 8, 10];
const zone = ["D" , "B" , "C" , "A" , "D" , "A" , "C" , "A" , "A" , "A"];

// store - 매장명 , floor - 층수 , zone - 층별 구역

// 매장명을 입력하면 매장의 위치를 출력

//window.onload=function(){}
$(function(){
    // document.getElementById("store")
    // keydown(눌렀을때 발생) , keyup(땟을때 발생) , keypress(둘다 적용)
    // 해당 태그에 대한 키를 입력할때 발생하는 이벤트
    $("#store").keyup(function(key){
        if( key.keyCode == 13 ) // 엔터키 눌렀다면
            store_search();
    })
});


function store_search(){
    var brand = $("#store").val(); // input에 입력한 브랜드명 가져오기
    // 배열에서 데이터 존재유무 확인
    var idx = store.indexOf(brand); // indexOf의 결과가 -1이라면 배열에 없는 데이터
    if( idx == -1 )
        $("#result").text("존재하지않는 브랜드 입니다.");
    else{
        var res = `<b>${floor[idx]}</b> , ${zone[idx]}구역`;
        res += `<h3>${floor[idx]}층 매장</h3>`;
        let same_floor = new Array();
        for(var i=0; i<floor.length; i++){
            if( floor[i] == floor[idx] && i!=idx ){
                same_floor.push(store[i]);
            }
        }
        res += same_floor;


        $("#result").html(res);
    }
    
    // for(var i=0; i<store.length; i++){
    //     if( store[i] == brand ){
    //         alert("찾았다"+i+"번째인데스");
    //     }
    // }
}