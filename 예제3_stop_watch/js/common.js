/*stop watch*/
let count = 0;
let t;//setTimeout 할당 변수
let timer_is_on = 0;//setTimout 작동여부 체크하는 변수

/*1초마다 한번씩 count를 증가시키는 함수*/
function timeCount(){
  document.getElementById('stop_watch').innerHTML = count;
  count = count + 1;
  t = setTimeout(timeCount,1000);//setTimeout은 자바스크립트에 기본적으로 제공되는 함수, setTime(function,number)형식
}

/*startCount 함수 만들기*/
function startCount(){
  if( timer_is_on == 0 ){
    console.log(timer_is_on+':할당하기전')
    timer_is_on = 1;
    console.log(timer_is_on+':할당후')
    timeCount();
  }
}

/*pauseCount 함수 만들기*/
function pauseCount(){
  timer_is_on = 0;
  console.log(timer_is_on+':clear 실행전')
  clearTimeout(t);
  console.log(timer_is_on+':clear 실행후')
}

/*clearCount 함수 만들기*/
function resetCount(){
//실행문
  timer_is_on = 0;
  clearTimeout(t);
  count = 0;
    document.getElementById('stop_watch').innerHTML = count;
}
