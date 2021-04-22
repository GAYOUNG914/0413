/*일반 함수 선언*/
let commonFunc = function(tx){
  console.log('나는 일반 익명함수 입니다.')
}
commonFunc();//호출
/*화살표 함수(arrow function) 선언*/
/*ES6*/
let arrowFunc = (txt) => {
  console.log(txt+'나는 arrow function 입니다.')
}
arrowFunc('좋은 아침입니다.')
