// show() , hide() , toggle() 효과없이 바로
// fadeIn() , fadeOut() , fadeToggle() 서서히 나타나는 효과
// slideDown() , slideUp() , slideToggle()
// 효과의 지속시간은 3000mms = 3s

let slide_idx = 0;


$(function(){
    $(".menuList>.menuItem").on("mouseover",function(){
        $(this).children(".subMenu").slideDown();
    });

    $(".menuList>.menuItem").on("mouseout",function(){
        $(this).children(".subMenu").slideUp();
    });

    $(".leftBt").on("click",function(){
        if(slide_idx != $(".slideImg").length-1 ){ // 마지막 이미지 일 경우 이동 불가
            slide_idx++;
            $(".slideList").css("right", (slide_idx*1200) + "px");
        }
    });
    $(".rightBt").on("click",function(){
        if(slide_idx!=0){
            slide_idx--;
            $(".slideList").css("right",(slide_idx*1200)+"px");
        }
    });

    // 자동 슬라이드 이미지
    // 시간을 제어
    // setTimeout  : 지정한 시간 이후 단 한번 동작
    // setInterval : 지정한 시간 간격으로 동작
    
    // setInterval( 실행할 내용(함수) , 시간(밀리세컨드) );
    setInterval(
        function(){ // 익명 함수
            if(slide_idx != $(".slideImg").length-1 ){
                slide_idx++;
                $(".slideList").css("right", (slide_idx*1200) + "px");
            }else{
                slide_idx=0;
                $(".slideList").css("right", (slide_idx*1200) + "px");
            }
        } , 3500
    );
    
});

// function save() {  }; - 이름 함수