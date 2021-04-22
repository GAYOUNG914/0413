/*live watch*/
function startTime(){
  let today = new Date();//날짜 생성자
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  h = checkTime(h);//0~23
  m = checkTime(m);//0~59
  s = checkTime(s);//0~59
  // console.log(h+'시'+m+'분'+s+'초')
  if( h == 16 && m > 55 ){
    document.getElementById('txt').innerHTML = '쉬는 시간은 5시 10분 부터 입니다.';
  }else{
    document.getElementById('txt').innerHTML = h + ':' + m + ':' + s;
  }
  let t = setTimeout(startTime,1000);
}

function checkTime(i){
  if( i < 10 ){
    i = "0" + i;
  }
  return i
}

startTime();
