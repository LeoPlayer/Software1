function move() {
  var elem = document.getElementById("myBar");   
  var width = 0;
  var id = setInterval(frame, 40); //*10 the seconds you want it to load
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}