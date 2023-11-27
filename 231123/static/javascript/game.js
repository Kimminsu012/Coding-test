let board = new Array();
let score = new Array();
// 중복없이 25개 숫자 저장하기
for( var i=0; i<=25; i++){
    var tmp = Math.floor(Math.random()*100)+1;
    if( board.indexOf(tmp) == -1 )
        board.push(tmp);
    else
        i--;
}

// for(var i=0; i<board.length; i++)
//     var v=board[i]

$(function(){

    $.each( board , function(i,v){ // i-인덱스 , v-배열값
        $(".numBox").eq(i).text( v );
    });

    $(".numBox").on("click",function(){
        $(this).css("background-color","black");
        $(this).css("color","white");
        var idx = $(".numBox").index(this);
        score.push(board.indexOf(board[idx]));
        board[idx] = 0;
        endgame();
    })

});


let row1 = 0;
let row2 = 0;
let row3 = 0;
let row4 = 0;
let row5 = 0;
let col1 = 0;
let col2 = 0;
let col3 = 0;
let col4 = 0;
let col5 = 0;
let cross1 = 0;
let cross2 = 0;


function endgame(){
    let result = 0;
    // 열 +1 , 행 +5 , 대각 +6 규칙

    if($(this).index >= 1){
        var count = 0;
        if( board.includes[0,1,2,3,4] == true){
            count++;
        }
        if( count == 1 ) result++;
    }
    console.log(result)















    // if( score.length >= 1 ){
    //     var count = 0;
    //     if( board.includes[0] === true ) count++;
    //     if( board.includes[1] === true ) count++;
    //     if( board.includes[2] === true ) count++;
    //     if( board.includes[3] === true ) count++;
    //     if( board.includes[4] === true ) count++;
    //     if( count == 1) result = result+1;
    // }
    // if( score.length >= 1 ){
    //     var count = 0;
    //     if( board.includes[5] === true ) count++;
    //     if( board.includes[6] === true ) count++;
    //     if( board.includes[7] === true ) count++;
    //     if( board.includes[8] === true ) count++;
    //     if( board.includes[9] === true ) count++;
    //     if( count == 5)
    //     result = result+1;
    // }
    // if( score.length >= 1 ){
    //     var count = 0;
    //     if( board.includes[10] === true ) count++;
    //     if( board.includes[11] === true ) count++;
    //     if( board.includes[12] === true ) count++;
    //     if( board.includes[13] === true ) count++;
    //     if( board.includes[14] === true ) count++;
    //     if( count == 5)
    //     result = result+1;
    // }
    // if( score.length >= 1 ){
    //     var count = 0;
    //     if( board.includes[15] === true ) count++;
    //     if( board.includes[16] === true ) count++;
    //     if( board.includes[17] === true ) count++;
    //     if( board.includes[18] === true ) count++;
    //     if( board.includes[19] === true ) count++;
    //     if( count == 5)
    //     result = result+1;
    // }
    // if( score.length >= 1 ){
    //     var count = 0;
    //     if( board.includes[20] === true ) count++;
    //     if( board.includes[21] === true ) count++;
    //     if( board.includes[22] === true ) count++;
    //     if( board.includes[23] === true ) count++;
    //     if( board.includes[24] === true ) count++;
    //     if( count == 5)
    //     result = result+1;
    // }
    // if( score.length >= 1 ){
    //     var count = 0;
    //     if( board.includes[0] === true ) count++;
    //     if( board.includes[5] === true ) count++;
    //     if( board.includes[10] === true ) count++;
    //     if( board.includes[15] === true ) count++;
    //     if( board.includes[20] === true ) count++;
    //     if( count == 1) result = result+1;
    // }
    // if( score.length >= 1 ){
    //     var count = 0;
    //     if( board.includes[1] === true ) count++;
    //     if( board.includes[6] === true ) count++;
    //     if( board.includes[11] === true ) count++;
    //     if( board.includes[16] === true ) count++;
    //     if( board.includes[21] === true ) count++;
    //     if( count == 5)
    //     result = result+1;
    // }
    // if( score.length >= 1 ){
    //     var count = 0;
    //     if( board.includes[2] === true ) count++;
    //     if( board.includes[7] === true ) count++;
    //     if( board.includes[12] === true ) count++;
    //     if( board.includes[17] === true ) count++;
    //     if( board.includes[22] === true ) count++;
    //     if( count == 5)
    //     result = result+1;
    // }
    // if( score.length >= 1 ){
    //     var count = 0;
    //     if( board.includes[3] === true ) count++;
    //     if( board.includes[8] === true ) count++;
    //     if( board.includes[13] === true ) count++;
    //     if( board.includes[18] === true ) count++;
    //     if( board.includes[23] === true ) count++;
    //     if( count == 5)
    //     result = result+1;
    // }
    // if( score.length >= 1 ){
    //     var count = 0;
    //     if( board.includes[4] === true ) count++;
    //     if( board.includes[9] === true ) count++;
    //     if( board.includes[14] === true ) count++;
    //     if( board.includes[19] === true ) count++;
    //     if( board.includes[24] === true ) count++;
    //     if( count == 5)
    //     result = result+1;
    // }
    // if( score.length >= 1 ){
    //     var count = 0;
    //     if( board.includes[0] === true ) count++;
    //     if( board.includes[6] === true ) count++;
    //     if( board.includes[12] === true ) count++;
    //     if( board.includes[18] === true ) count++;
    //     if( board.includes[24] === true ) count++;
    //     if( count == 5)
    //     result = result+1;
    // }
    // if( score.length >= 1 ){
    //     var count = 0;
    //     if( board.includes[4] === true ) count++;
    //     if( board.includes[8] === true ) count++;
    //     if( board.includes[12] === true ) count++;
    //     if( board.includes[16] === true ) count++;
    //     if( board.includes[20] === true ) count++;
    //     if( count == 5)
    //     result = result+1;
    // }
    // console.log(count);
    // console.log(result);
}