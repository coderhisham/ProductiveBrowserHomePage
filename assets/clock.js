window.addEventListener("DOMContentLoaded", showTime());

function showTime() {
  //date object
  let date = new Date();

  //Activar para cambiar la hora
  // date.setTime(00000000000000);

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  //   let session = "AM";

  //   if (h == 0) {
  //     h = 12;
  //   }
  //   if (h > 12) {
  //     h = h - 12;
  //     session = "PM";
  //   }

  //version larga
  // if(h<10){ h='0' + h;}
  // if(m<10){ m='0' + m;}
  // if(s<10){s='0' + s; }

  //version corta
  //   h = h < 10 ? (h = "0" + h) : h;
  //   m = m < 10 ? (m = "0" + m) : m;
  //   s = s < 10 ? (s = "0" + s) : s;

  //small tag para los segundos y el pm/am
  const time = `${h}:${m}`;

  document.getElementById("displayClock").innerHTML = time;
  setTimeout(showTime, 1000);

  //cambiar el fondo/imagen
  let bg;
  const userName = "Hisham";
  const user = document.getElementById("User");

  if (h >= 5 && h <= 8 && session === "AM") {
    bg = `url(https://source.unsplash.com/-G3rw6Y02D0)`;
    user.innerHTML = `Good Morning, ${userName}`;
  } else if (h > 8 && h < 12 && session === "AM") {
    bg = `url(https://source.unsplash.com/1fUu0dratoM)`;
    user.innerHTML = `Good Day, ${userName}`;
  } else if (h >= 1 && h <= 5 && session === "PM") {
    bg = `url(https://source.unsplash.com/mBQIfKlvowM)`;
    user.innerHTML = `Good Afternoon, ${userName}`;
  } else if (h <= 10 && session === "PM") {
    bg = `url(https://source.unsplash.com/PpsgIw3iWZ4)`;
    user.innerHTML = `Good Evening, ${userName}`;
  } else {
    bg = `url(https://source.unsplash.com/o4jvrDplbn4)`;
    user.innerHTML = `Good Night, ${userName}`;
  }

  //insertar bg
  const body = document.querySelector("body");
  body.style.background = `${bg} center/cover`;
}
