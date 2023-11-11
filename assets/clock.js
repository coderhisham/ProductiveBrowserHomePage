window.addEventListener("DOMContentLoaded", showTime());

function showTime() {
  //date object
  let date = new Date();

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let day1 = date.toDateString();
  let days = day1.split(" ");

  //version corta
  h = h < 10 ? (h = "0" + h) : h;
  m = m < 10 ? (m = "0" + m) : m;
  s = s < 10 ? (s = "0" + s) : s;

  //small tag para los segundos y el pm/am
  const time = `${h}:${m}`;

  document.getElementById("displayClock").innerHTML = time;
  setTimeout(showTime, 1000);

  document.getElementById("day").innerHTML =
    days[2] + " " + days[1] + "," + " " + days[0];
}
