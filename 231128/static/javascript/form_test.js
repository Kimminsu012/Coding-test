
// 모두 동의 체크시 전체 체크 및 해제
// 체크 목록 중 하나라도 체크 해제 되면 모두 동의 체크 해제
// 다음 진행 버튼 클릭시 모두 체크 안되어 있으면 모두 체크하세요 라고 멘트 띄우기



// $(function(){

//     $("#allchk").on("click",function(){
//         let isAlck = $(this).is(":checked");
//         console.log(isAlck)
//         if( isAlck )
//         $(".agree").prop('checked',true);
//         else
//         $(".agree").prop('checked',false);
// });
//     $(".agree").on("click",function(){
//         var agree_count = $(".agree:checked").length;
//         var agree_check = $(".agree").length;
//         if( agree_count == agree_check )
//             $("#allchk").prop('checked',true);
//         else
//             $("#allchk").prop('checked',false);
//     });

//     $("#pass").on("click",function(){
//       var agree_count = $(".agree:checked").length;
//       var agree_check = $(".agree").length;
//       if( agree_count == agree_check )
//         alert("모두 체크해주세요");
//     });
// });

// 선생님 풀이
$(function(){
    $("#allchk").on("click",function(){
        var isCheck = $(this).is(":checked"); // 체크박스의 체크여부 확인
        if( isCheck )
            $(".agree").prop("checked",true);
        else
            $(".agree").prop("checked",false);
    });
    // 클래스명이 agree인 체크박스에 하나씩 체크하거나 전체체크 된 경우 하나이상
    // 체크해제 했을때 모두동의 체크박스의 체크를 해제
    $(".agree").on("click",function(){
        var chk_cnt = $(".agree:checked").length; // 체크박스의 체크갯수
        var all_cnt = $(".agree").length; // 전체 체크박스 갯수
        if( chk_cnt == all_cnt )
            $("#allchk").prop("checked",true);
        else
            $("#allchk").prop("checked",false);
    });
    $("#pass").on("click",function(){
        var chk_cnt = $(".agree:checked").length;
        var all_cnt = $(".agree").length;
        if( chk_cnt != all_cnt ){
            alert("모두 체크해주세요");
        }
    });
});