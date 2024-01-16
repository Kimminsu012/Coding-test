




$(function(){

    let pu = 0;
    
    

    $("#slide_bt").on("click",function(){
        
        if(pu == 0){
        $("#top_img_box").css("animation-play-state","paused");
        $("#bottom_img_box").css("animation-play-state","paused");
        pu++;
        }
        

    })
    
    $("#slide_bt").on("click",function(){
        if(pu == 1){
        $("#top_img_box").css("animation-play-state","running");
        $("#bottom_img_box").css("animation-play-state","running");
        pu--;
    }

    })
    
    


});
