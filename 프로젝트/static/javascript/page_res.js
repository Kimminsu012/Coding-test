let slideWrap = $(".slide_wrap"),
    slideShow = slideWrap.find(".slide_show"),
    slideList = slideShow.find(".slide_list"),
    slides = slideList.find(".slide"),
    slideBtn = slideWrap.find(".slide_btn");

let slideCount = slides.length,
    slideWidth = slides.innerWidth(),
    showNum = 3,
    num = 0,
    currentIndex = 0,
    
    slideCopy = $(".slide:lt("+ showNum +")").clone();
    slideList.append(slideCopy);


function backShow(){
    if( num == 0 ){
        num= slideCount;
        slideList.css("left", -num * slideWidth + "px");
    }
num--;
    slideList.stop().animate({ left : -slideWidth * num +"px"}, 300);
}

function nextShow(){
    if( num == slideCount ){
        num= 0;
        slideList.css("left", num);
    }
num++;
    slideList.stop().animate({ left : -slideWidth * num +"px"}, 300);
}

//왼쪽, 오른쪽 버튼 설정
slideBtn.on("click","button",function(){
    if( $(this).hasClass("prev")){
        //왼쪽 버튼을 클릭
        backShow();
    } else {
        //오른쪽 버튼을 클릭
        nextShow();
    }
});
