
let mid = ["asdf","qwe","zxc","dldl","qpqp","alal","nakio","cqe"];
let mpw = ["1234","342","123","2345","3456","4576","5687","6789"];


$(function(){

    $("#signBt").on("click",function(){

        if( $("#id").val() == '' ){
            alert("아이디를 입력하세요");
            $("#id").focus();
        }else if( $("#pw").val() == '' ){
            alert("비밀번호를 입력하세요");
            $("#pw").focus();
        }
        else{ // in - tmp 에 index가 저장이 된다. // mid의 배열의 데이터가 tmp에 하나씩 저장이 된다.
            
            // 아이디 존재 유무
            var idx = mid.indexOf($("#id").val());
            if(idx == -1){
                var ok = confirm("아이디가 존재 하지 않습니다.\n회원가입하시겠습니까?");
                if(ok) location.href="signup.html";
            }else if( mpw[idx]==$("#pw").val() ){
                alert("로그인 성공");
            }else{
                alert("비밀번호가 일치 하지 않습니다");
                $("#pw").val("").focus(); // 비밀번호 재입력을 위해 비우고 커서두기
            }



            // for( var tmp in mid ){ 
            //     if( mid[tmp] == $("#id").val() ){
            //         if( mpw[tmp] == $("#pw").val()){
            //             alert("로그인 성공")
            //             break;
            //         }else{
            //             alert("비밀번호가 올바르지 않습니다");
            //         }
            //     }
            // }
            
        }

    //     if($("#id").val() != mid.index()){
    //         alert("아이디가 올바르지 않습니다");


    //     // 로그인 시도가 된다면 - 아이디 비밀번호 올바르지 않은 경우
    // }else if( $("#id").val() != 'abc' && $("#pw").val() != '123' ){
    //         alert("아이디 또는 비밀번호가 올바르지 않습니다");
    //         $("#id").val("").focus();
    //         $("#pw").val("");
    //     }

    });


});