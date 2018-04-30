var led10


boardReady({device: 'KpDZ'}, function (board) {
  board.systemReset()
  board.samplingInterval = 20
  led10 = getLed(board, 10)
  led11 = getLed(board, 11)
  led10.off()
  led11.off()
  
  clickPic_change_LED()   //點擊圖片切換LED狀態
  LED_blink()   //LED閃爍
})

function clickPic_change_LED(){
  document.getElementById("light").setAttribute("class","off")
  document.getElementById("light").addEventListener("click",function(){
    if (document.getElementById("light").getAttribute("class")=="on") {
      led10.off()
      document.getElementById("light").setAttribute("class","off")
    } else {
      document.getElementById("light").setAttribute("class","on")
      led10.on()
    }
  })
}
function LED_blink(){
  document.getElementById('btn1').addEventListener('click',function () {
    led10.on();
    led11.off();
    led10.blink(500);
    led11.blink(500);
  });
  document.getElementById('btn2').addEventListener('click',function () {
    led10.on();
    led11.off();
  });
}