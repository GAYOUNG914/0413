/*setTimeout*/
/*
  setTimeout(a,b)
  a: function // 매개변수로 받는 콜백함수(원하는 시점에 함수를 호출하여 사용)
  b : 5000 // 밀리세컨드
*/
/*일정시간 후 로직을 작동*/
let setTimeNum;
let num = 15;
function setTimeFunc(){
  setTimeNum = setTimeout(alertFunc,5000);
}
function alertFunc(){
  alert('저는 setTimeout 입니다.')
}

// setTimeFunc();
// if( num > 10 ){
//   clearTimeout(setTimeNum)
// }

/*addEventListener 사용 함수호출*/
