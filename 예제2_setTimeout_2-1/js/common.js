/*setTimeout*/
// let num = prompt('타임아웃 시간을 추가해주세요!!','숫자')
function timeText(num){
  let x = document.getElementById('txt');
  for( let i = 0 ; i < num; i++){
    let secondNum = i+1;
      setTimeout(function(){
        x.value = secondNum+"초";
        if( secondNum == num-1 ){
          alert('time out!!');
        }
      },i*1000);
  }
}

// let txt = document.getElementById('txt').value;
// txt = '안녕하세요';
// console.log(txt);
