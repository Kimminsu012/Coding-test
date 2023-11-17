
// // 학이 침을 뱉으면 - 퇴학

// // 닭이 작은사이즈 옷을 입으면 - 꼬끼오

// // 우리나라에 석유가 도작하는게 걸리는 시간은? - 오일

// // 잘생긴 가위는? - 핸썸가이

// // 우유가 아프면? - 앙팡

// // 엄마가 길을 잃었다면? - 맘마미아

// // 티파니와 태연이 싸우면? - 티격태격

// // 어벤저스가 쓰는펜 ? - 블랙펜서

// // 인어공주의 성씨 - 안다다씨

// // 고양이한테 야옹하면 대답은? - 왜옹?  


// // 문자열
// // 자바스크립트에서 문자열은 String객체 라는것으로 저장이 된고 사용된다.
// // String객체에는 다양한 문자열을 처리하기위한 메서드가 있다.

// // 1. 문자열의 문자 갯수가 몇개인지 가져오기 - length **

// var word = "member";
// var len = word.length;
// console.log(`문자열의 갯수 : ${len}`);

// // 2. 문자열에서 한글자만 가져오기 - charAt(빼오고 싶은 글자의 순번)
// // 순번은 첫 시작을 0 으로 시작하여 0 1 2 3 이런순으로 진행 된다.

// var at = word.charAt(3);
// console.log(`빼온 문자열 : ${at}`);

// // 3. 문자열에서 특정문자 또는 문자열이 있는지? 어디에 있는지? - indexOf() **
// // 문자열에 검색문자 또는 문자열이 없다면 -1
// // 맨 앞에서부터 찾기 시작하여 2개 이상일 경우 앞에 있는 단어를 인식해 그 순서만 나타내준다.

// word = "i like html";
// var idx = word.indexOf("l");
// console.log(idx);
// if( word.indexOf("love") < 0 ){ 
//     console.log("없다");
// }

// // 4. indexOf는 문자열의 첫번째부터 검색을 하기 떄문에
// // 뒤쪽에 있는 문자나 문자열이 결과로 나오지 않을 수 있다.
// // lastIndexOf() - 문자열의 뒤쪽에서 검색 **

// var ldx = word.lastIndexOf("l");
// console.log(ldx);

// // 5. replace - 문자열에서 특정 문자열을 다른 문자열로 변경 **
// // 워드 변수에 있는 원문은 건들지 않아서 복사를 한 후 다른 공간에 넣어서 변경을 하여야 한다.
// // 순서의 우선순위인 앞쪽 하나만 바꿀 수 있다.
// // 존재하지않는 것을 넣어 줄 수 있고 존재 하던 것을 뺄수가 있다.
// word = "i like css like like";
// var word2 = word.replace("like", "love");
// console.log(word2);

// // 정규표현식 **
// // g(global) : 문자열내의 모든 패턴 검색
// // i(ignore case) : 대소문자 구별 없이 검색
// // / /gi, - 문자열 안에 모든 것 들을 검색하여 바꿔준다.
// word = "i like css Like like";
// word2 = word.replace(/like/gi, "love");
// console.log(word2);

// // 정규표현식의 기본 구조 - /regexr/i (/패턴/플래그) , /값/표현식 ( /like/g )
// // /.[A-Z]/g - 1 문자와 대문자의 조합을 문자열 전체에서 검색
// // replace( /\`/g, "" ) - 특정문자 제거 ( - )
// // .test - 정규표현식 패턴이 생성이 되면 문자열에 패턴 검색을 하여 있는지 없는지 알려준다. (true , false)

// const regex = /good/; // good이라는 단어가 있는지 검색 하기 위해 표현식 생성
// var test = "banana apple cat good nice good cat apple cat good";

// console.log( regex.test(test)); // .test() - 문자열에 패턴이 존재 하는지 알려준다.(true , false)
// console.log( test.match(regex)); // .match() - 패턴에 매칭되는 문자열들을 가지고온다.

// // 플래그의 종류
// // i - ignore case 대소문자의 구별없이 검색
// // g - global 문자열 내 모든 패턴 검색 (문자열이 붙어 있어도 해당하는 것만 검색)
// // m - multi line 문자열의 행이 바뀌더라도 검색을 계속한다.
// // s - 모든 문자 검색(특수문자 포함) : 특수문자( \n, \r, \t, \p, \a 등등)
// // \n = 엔터 , \r = 끝부분 , \t = 탭키 등등
// // u - 유니코드(문자코드) 검색 ( %2b%11%ab%ac%15%a2 )
// // y - sticky 문자열 내 특정 위치에서 검색을 진행
// // /^/ - 정규표현식에서 패턴앞에 ^를 넣으면 해당하는 문자열로 시작하는 단어를 검색

// console.log( test.match( /cat/g ) );
// word = "banana \napple \nmember!! \napple";
// console.log( word.match( /^apple/gm ) ); // ^apple : 문장이 apple로 시작하는지 검사

// // 정규표현식 기호
// /*
//     영어알파뱃 : a-z , A-Z ( 범위 검색 ) 대소문자를 둘다 찾을려면 a-z,A-Z 둘다 사용하면 된다.
//     한글 : ㄱ-ㅎ , 가-힣 ( 범위 검색 )
//     숫자 : 0-9 ( 범위 검색 ) ex) 6-9 -> 6 7 8 9 , 1-6 -> 1 2 3 4 5 6
//     모든문자열 : . ( 숫자 , 한글 , 영어 , 특수기호 , 공백 전부 해당 ) 단, 줄바뀌면 안됨.
//     \d : 숫자 전체
//     \D : 숫자가 아닌 것
//     \w : 영숫자 문자 <- ( A-Za-z0-9 )
//     \W : 영숫자가 아닌 것
//     \s : space바로 만든 공백
//     \S : space 공백 아닌 것
//     ? : 있든 없든 상관 없는 것

//     패턴 검색 기준
//     /패턴/
//     | - or ( /\D | \S/ )
//     [ ] - or처리묶음 ( /[123]/ ) -> 1 | 2 | 3 /[다-아]/
//     ^문자열 - 특정문자열로 시작 (행의 시작점)
//     문자열$ - 특정문자열로 끝남 (행의 마지막)
//     [^문자열] - 괄호안의 문자를 제외한 것 [^adfg] -> a d f g 는 제외하고 검색

//     이메일 유효 검사 정규표현식
//     ^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9]+\.[a-zA-Z]+$
    
//     영어숫자 _ -> abs_11@naver.com
    
//     /^010-?([0-9]{4})-?([0-9]{4})$/

// */

// word="나는 20살입니다. \n전화번호는 010-1234-1234 입니다.";
// console.log( "원본 : " + word );
// console.log( word.replace(/\-/g,"") );
// console.log( word.replace(/\./g, "") );
// console.log( word.replace(/\s/g, "" ) );
// console.log( word.replace(/..살/g, "45살") )

// // 전화번호에서 1234-1234 부분을 xxxx-1234로 변경
// console.log( word.replace(/1234/, "xxxx"));
// console.log( word.replace(/[0-9]{4}/, "xxxx"));

// var tmoney = "3,410,200원";
// var money = tmoney.replace(",","");
// console.log(money);
// var money = tmoney.replace(/\,/g,"");
// console.log(money);
// var money = tmoney.replace(/\,/g,"").replace(/원$/,"");
// console.log(money);
// var money = tmoney.replace(/[\,원]/g,"");
// console.log(money);
// var money = tmoney.replace(/[^0-9]/g,"");
// console.log(money);
// var money = tmoney.replace(/[^\d]/g,"");
// console.log(money);
// var money = tmoney.replace(/\d/g,"");
// console.log(money);
// var money = tmoney.replace(/\D/g,"");
// console.log(money);

// // 문자열 나누기 - split()
// word = "이순신,강감찬,김유신,장보고,최무선,장영실";
// const name = word.split(",");
// console.log(name[3]);
// word = "nice123@naver.com";
// var id = word.split("@")[0];
// console.log(id);

// // 7. 문자열 추출 - substring()

// console.log( word.substring(0,7) ); // 0번 부터 7번 전까지 추출 범위를 지정하여 추출
// console.log( word.substring(4) ); // 4번 부터 끝까지 추출 범위를 지정하여 추출
// console.log( word.substring(0, word.indexOf("@") ) );

// var birth = "19971209";
// // 생년월일중에서 몇월생인지 출력

// console.log( birth.substring(4, 6));
// console.log( birth.replace(/^[0-9]{4}/g,"").replace(/[0-9]{2}$/g, ""));

// // 8. 문자열 추출2 - slice() : 음수값도 사용할 수 있다.
// word = "자바스크립트 너무 좋아!";
// console.log( word.slice(2,7));
// console.log( word.slice(-3));
// console.log( word.slice(-3, -2)); // 음수는 음수만 양수는 양수만 같이 쓰면 출력이 안됨.


// var text = "강동욱 105,000원-남기현 345,200원-서종우 10,000원-송재영 4,343,290원";
// // 문제
// // 남기현이 보유한 현금은 얼마인가? (정수로 출력)
// // 강동욱이 보유한 현금에 서종우의 돈을 빼면 얼마인가??
// // 송재영의 돈을 434,329원으로 변경하시오

// var gan = text.split("-")[0];

// var nam = text.split("-")[1];

// var suj = text.split("-")[2];

// var son = text.split("-")[3];

// var mem = text.split("-");


// console.log( text.split("-서종우")[0] .slice(13) );
// console.log( gan.replace(/..5/g,"95"));
// console.log( son.split("0")[0] .replace(/[\d\,]{8}/g,"434,329원") );
// console.log( son.split("0")[0] .replace(/\,/g,"" ).toLocaleString());


// const member = text.split("-");
// var money = parseInt(member[1].split(" ")[1].replace(/[^0-9]/,""));
// console.log(money);

// var 강동욱 = parseInt(member[0].split(" ")[1].replace(/[^0-9]/,""));
// var 서종우 = parseInt(member[2].split(" ")[1].replace(/[^0-9]/,""));
// console.log( (강동욱-서종우).toLocaleString() + "원" ); // toLocaleString - 1000단위에 , 를 넣어줌

// // let 송재영 = member[3].split(" ")[1].replace("4,343,290","434,329");
// var n = member[3].split(" ")[0];
// var m = parseInt( member[3].slice(n.length+1).replace(/[^0-9]/g,""));
// m = m/10;
// member[3] = n+" "+(m.toLocaleString() + "원"  );
// text = member.join("-");
// console.log(text);

// // 9. 소문자 , 대문자 변경 - toLowerCase() , toUpperCase()
// word = "   i LOVE School";
// console.log( word .toLowerCase() );
// console.log( word.toUpperCase() );

// // 10. 공백제거 - trim() - 문자열의 양쪽끝 공백 제거
// console.log("공백제거전 : " + word)
// console.log("공백제서후 : " +  word.trim() );

// // 11. 문자열 반복 - repear()
// word = "apple";
// console.log( word.repeat(3) ) ;

// // 12. 문자열 위치 정렬 또는 채우기 - padStart() , padEnd()
// console.log( word.padStart(10) );
// console.log( word.padEnd(10, "    a") );

// // 13. 문자열에 특정 문자열 포함 여부(참,거짓) - includes()
// word = "이순신, 장보고, 강감찬, 최영, 정도전, 정약용, 양만춘";
// if( word.includes("최영") ){
//     console.log("회원입니다.");
// }else{
//     console.log("회원이 아닙니다.");
// }

// // 14. 문자열이 특정 문자나 문자열로 시작하는지 - startsWith() , endsWith()
// var info = "이름 : 이순신, 직업 : 군인";
// if( info.startsWith("이름")){
//     console.log("올바른 형식의 데이터입니다.")
// }else{
//     console.log("잘못된 데이터입니다.")
// }

// // 15. 문자열로 변환 - toString()
// var num = 100;
// console.log( typeof num.toString() );

// var birth = 19990101;
// // birth / 10000
// var year = parseInt(birth.toString().substring(0,4));
// console.log(year);

// /*
//     .length - 문자열의 길이(문자열 갯수)
//     .charAt(숫자) - 지정한 번호 위치의 문자 추출
//     .indexOf(문자열) - 문자열에서 특정문자 또는 문자열이 몇번째 있는지 알려준다. 없으면 -1
//     .lastIndexOf(문자열) - 문자열의 긑에서 문자 또는 문자열 몇번째 있는지 검색
//     .includes(문자열) - 문자열에 특정 문자 또는 문자열의 존재여부 (true,false)
//     .replace(원본문자열, 변환문자열) - 문자열에서 특정문자 또는 문자열을 지정한 문자 또는 문자열로 변환
//     .split(문자열) - 문자열을 특정 문자열을 기준으로 분리한다. ( 배열이라는 구조로 저장 )
//     .substring(시작번호, 끝번호) , .substring(시작번호)
//     - 문자열에서 지정된 위치의 문자열을 추출
//     .slice(시작번호, 끝번호) , .slice(시작번호, 끝번호)
//     - 문자열에서 지정된 위치의 문자열을 추출, 음수사용시 뒤에서부터 추출
//     .toLowerCase(), toUpperCase() - 소문자, 대문자로 변환
//     .padStart(숫자), .padEnd(숫자) - 자릿수지정과 정렬 및 채우기
//     .trim() - 문자열의 양쪽끝 공백제거
//     .startsWith(문자열), .endsWith(문자열) - 문자열의 시작 과 끝이 특정 문자열로 시작하는지 여부
//     .toString() - 문자열로 변환
//     .repeat(숫자) - 지정한 숫자만큼 반복 출력된다.
// */

// // var nn = "가시, 나시, 다시, 마시, 라시";
// // if( nn.includes("가시")){
// //     if( nn.startsWith("가시") ){
// //         console.log("맞다");
// //     }else{
// //         console.log("아님");
// //     }
// // }else{
// //     console.log("아님");
// // }








let info = "이순신:군인,34세,아산 - 장보고:군인,41세,완도 - 김춘추:정치인,28세,경주";
let data = info.split(" - ");
// 출력 - 이름 직업

var 이순신_name = data[0].substring(0, data[0].indexOf(":")); //data[0].split(":");
var 이순신_직업 = data[0].substring(data[0].indexOf(":")+1, data[0].indexOf(","));

console.log(이순신_name + " " + 이순신_직업);

// 장보고의 나이는 몇인가? 출력 - 나이만 출력하기

var 장보고_나이 = data[1].substring(data[1].indexOf(",")+1, data[1].lastIndexOf(","));
// var 장보고_나이 = data[1].substring(data[1].indexOf(",")+1, data[1].indexOf("세"));
console.log(parseInt(장보고_나이)); // parseInt() - 앞쪽에 있는 숫자만 정수로 변환

