
const daysl = document.getElementById('days');
const hoursl = document.getElementById('hours');
const minsl = document.getElementById('mins');
const secl = document.getElementById('sec');
const colors = {
    1 : "blue",
    2: "red",
    3: "orange",
    4: "white",
    5: "#e36bae",
    6: "#810000",
    7: "#1f441e",
    8: "#93329e",
    9: "#fff600",
    10: "#09015f",
    11: "#dddddd",
    12 : "#74c7b8",
    13: "#c0e218",
    14: "#aa8976",
    15: "#9f5f800",

}

document.getElementById("start").addEventListener('click',() =>{
  const l = document.querySelectorAll("input");
  const p = l[0].value.split('-');
  const t = l[1].value.split(':');


  const newYearDate = new Date(p[0] ,p[1]-1 , p[2] ,t[0] ,t[1]);

  const nowDate = new Date();
  if(newYearDate == "Invalid Date"){
    alert("Enter Valid date");
  }else{
    if(newYearDate < nowDate ){
      alert("Enter Valid date");
    }else{
       var rot = document.querySelector('.timer');
       rot.classList.toggle('timer1');

      countdown();
     var i =  setInterval(countdown ,1000);

      function countdown(){
      const currentDate = new Date();


        const totalSeconds =  (newYearDate-currentDate)/1000;
        const days = Math.floor(totalSeconds/(3600*24));
        const hours = Math.floor(totalSeconds/3600)%24;
        const minutes = Math.floor(totalSeconds/60)%60;
        const seconds = Math.floor(totalSeconds)%60;

        if(days == 0 && hours == 0 && minutes == 0 && seconds == 0){
          var audio = new Audio('Positive-game-notification.mp3');
          audio.play();
          colorchange();
          setInterval(colorchange , 300);
          function colorchange(){
            var h = document.querySelector('body');
            h.style.backgroundColor = colors[Math.floor((Math.random()*15) +1)] ;
            clearInterval(i);

          }
        }

        daysl.innerHTML = days;
        hoursl.innerHTML = formatingTime(hours);
        minsl.innerHTML = formatingTime(minutes);
        secl.innerHTML = formatingTime(seconds);
        secl.style.color = colors[Math.floor((Math.random()*15) +1)] ;

      }
    }
  }

  // const newYear = "1 May 2021";
})






function formatingTime(time){
  return time < 10 ? `0${time}` : time;
}
