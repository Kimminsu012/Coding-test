let board = new Array();
let sc = new Array();
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

    // 선생님 풀이
    // $(".modal_bg").on("click",function(){
    //     $("#result_modal").hide();
    // });

    $.each( board , function(i,v){ // i-인덱스 , v-배열값
        $(".numBox").eq(i).text(v);
    });

    $(".numBox").on("click",function(){
        $(this).css("background-color","black");
        $(this).css("color","white");
        var idx = $(".numBox").index(this);
        sc.push(board.indexOf(board[idx]));
        board[idx] = 0;
        endgame();
    })

});

// 열 +1 , 행 +5 , 대각 +6 규칙
function endgame(){

    // 선생님 풀이
    // var row=0, col=0, end=0, cross=[0,0];
    // for( var i=0; i<5; i++ ){ // 빙고 확인하기
    //     for( var k=0; k<5; k++ ){
    //         if( board[i*5+k] == 0) row++; // 가로방향으로 5줄
    //         if( board[k*5+i] == 0) col++; // 세로방향으로 5줄
    //     }
    //     if( board[i*6] == 0) cross[0]++; // 왼->오 대각선
    //     if( board[(i+1)*4] == 0) cross[1]++; // 오->왼 대각선
    //     if(cross[1]==5) end++;
    //     if(cross[0]==5) end++;
    //     if(row == 5) end++;
    //     if(col == 5) end++;

    //     row=0; // 한줄씩 확인 할 때 마다 0개 부터 확인해야하므로 초기화
    //     col=0; // 1열씩 확인 할 때 마다 0개 부터 확인해야하므로 초기화
    // }

    // if( end == 5){ // 5줄 빙고 완성
    //     $("#result_modal").show(); // $("#result_modal").css("display","block");
    //     $(".result").text("5줄 빙고 완성");
    // }else if( end >= 6){ // 빙고 실패
    //     $("#result_modal").show();
    //     $(".result").text("6줄이상 빙고 실패");
    // }


    let result = 0;

    if(sc.length >= 1){
        var count = 0;
        if( sc.includes(0) === true) count++;
        if( sc.includes(1) === true) count++;
        if( sc.includes(2) === true) count++;
        if( sc.includes(3) === true) count++;
        if( sc.includes(4) === true) count++;
        if( count == 5 ) result++;
    }
    if(sc.length >= 1){
        var count = 0;
        if( sc.includes(5) === true) count++;
        if( sc.includes(6) === true) count++;
        if( sc.includes(7) === true) count++;
        if( sc.includes(8) === true) count++;
        if( sc.includes(9) === true) count++;
        if( count == 5 ) result++;
    }
    if(sc.length >= 1){
        var count = 0;
        if( sc.includes(10) === true) count++;
        if( sc.includes(11) === true) count++;
        if( sc.includes(12) === true) count++;
        if( sc.includes(13) === true) count++;
        if( sc.includes(14) === true) count++;
        if( count == 5 ) result++;
    }
    if(sc.length >= 1){
        var count = 0;
        if( sc.includes(15) === true) count++;
        if( sc.includes(16) === true) count++;
        if( sc.includes(17) === true) count++;
        if( sc.includes(18) === true) count++;
        if( sc.includes(19) === true) count++;
        if( count == 5 ) result++;
    }
    if(sc.length >= 1){
        var count = 0;
        if( sc.includes(20) === true) count++;
        if( sc.includes(21) === true) count++;
        if( sc.includes(22) === true) count++;
        if( sc.includes(23) === true) count++;
        if( sc.includes(24) === true) count++;
        if( count == 5 ) result++;
    }
    if(sc.length >= 1){
        var count = 0;
        if( sc.includes(0) === true) count++;
        if( sc.includes(5) === true) count++;
        if( sc.includes(10) === true) count++;
        if( sc.includes(15) === true) count++;
        if( sc.includes(20) === true) count++;
        if( count == 5 ) result++;
    }
    if(sc.length >= 1){
        var count = 0;
        if( sc.includes(1) === true) count++;
        if( sc.includes(6) === true) count++;
        if( sc.includes(11) === true) count++;
        if( sc.includes(16) === true) count++;
        if( sc.includes(21) === true) count++;
        if( count == 5 ) result++;
    }
    if(sc.length >= 1){
        var count = 0;
        if( sc.includes(2) === true) count++;
        if( sc.includes(7) === true) count++;
        if( sc.includes(12) === true) count++;
        if( sc.includes(17) === true) count++;
        if( sc.includes(22) === true) count++;
        if( count == 5 ) result++;
    }
    if(sc.length >= 1){
        var count = 0;
        if( sc.includes(3) === true) count++;
        if( sc.includes(8) === true) count++;
        if( sc.includes(13) === true) count++;
        if( sc.includes(18) === true) count++;
        if( sc.includes(23) === true) count++;
        if( count == 5 ) result++;
    }
    if(sc.length >= 1){
        var count = 0;
        if( sc.includes(4) === true) count++;
        if( sc.includes(9) === true) count++;
        if( sc.includes(14) === true) count++;
        if( sc.includes(19) === true) count++;
        if( sc.includes(24) === true) count++;
        if( count == 5 ) result++;
    }
    if(sc.length >= 1){
        var count = 0;
        if( sc.includes(0) === true) count++;
        if( sc.includes(6) === true) count++;
        if( sc.includes(12) === true) count++;
        if( sc.includes(18) === true) count++;
        if( sc.includes(24) === true) count++;
        if( count == 5 ) result++;
    }
    if(sc.length >= 1){
        var count = 0;
        if( sc.includes(4) === true) count++;
        if( sc.includes(8) === true) count++;
        if( sc.includes(12) === true) count++;
        if( sc.includes(16) === true) count++;
        if( sc.includes(20) === true) count++;
        if( count == 5 ) result++;
    }
    console.log(result);
    
    if( result == 5 ){
        $(".result_true").css("display","flex");
        $("#result_modal").css("display","flex");
        $("#reset_wrap").css("display","none");
    }else if( result > 5 ){
        $(".result_fail").css("display","flex");
        $("#result_modal").css("display","flex");
        $("#reset_wrap").css("display","none");
    }
    $(".out").on("click",function(){
        $(".result_fail").css("display","none");
        $(".result_true").css("display","none");
        $("#result_modal").css("display","none");
        $("#reset_wrap").css("display","flex");
    });
    $(".reset_button").on("click",function(){
        location.reload(true);
    });

}

