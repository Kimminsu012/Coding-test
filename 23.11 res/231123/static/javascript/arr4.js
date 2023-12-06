// 현재 배열은 1차원 배열이라고 한다.
// 


const movie_name = ["서울의봄","프레디의피자가게","사채소년","헝거게임",
"더와일드","더마블스","30일","나폴레옹","빅슬립"];

const grade = [8.7 , 7.3 , 7.3 , 6.7 , 8.2 , 3.9 , 6.9 , 9.6 , 9.0];

const nation = ["한국","미국","한국","미국","미국","미국","한국","영국","한국"];

// let movie = [movie_name , grade , nation]; - 2차원 배열
// movie[0][0]; - 2차배열에서 0번의 1차배열의 0번인 서울의봄을 빼는과정


// 영화 제목을 검색하여 평점(grade)와 국가(nation)을 출력하세요.



$(function(){
    $("#names").keyup(function(key){
        if(key.keyCode == 13 )
        roll();
    })
});

function roll(){
    var movie_re = ($("#names").val()).replace(/\s/g,""); // input에 입력한 값을 저장 // 공백을 입력을 해도 없애준다.
    var idx = movie_name.indexOf(movie_re); // 입력한 값이 어디 위치인지
    if( idx == -1)
        $("#result").text("잘 못 입력했습니다.");
    else{
        var res = `${grade[idx]}점 , 국가 : ${nation[idx]}`;
        let sames = new Array();
        res += sames;
        $("#result").html(res);
    }
    
}



// 다차원배열 - 1차원배열이 1차원배열들을 연결하여 만들어지는 배열
//             여러개의 1차원배열들이 존재하는 배열
let num = [ [1,2,3] , [4,5,6] , [11,22,33,44] ];

// alert( num[1][1] );

// 2차원배열은 인덱스가 2개 이기 때문에 반복문도 2번 사용된다.

for( var i=0; i<num.length; i++){
    for( var k=0; k<num[i].length; k++){
        document.write(num[i][k]+" ");
    }
}

