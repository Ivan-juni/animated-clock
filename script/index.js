const clock = document.querySelector(".clock");
const secondHand = document.querySelector(".seconds");
const minuteHand = document.querySelector(".minutes");
const hourHand = document.querySelector(".hours");

const spin = (clock, handName, amount) => {
  let element = clock.querySelector(`.${handName}`);
  element.style.transform = `rotate(${amount * 360}deg)`;
};

const setClock = (element, _offset, _time) => {
  let offset = _offset || 0;
  let time = _time || Date.now(); // time in ms
  let minutes = time / 1000 / 60 - offset; // set our minutes on clock (current time)

  console.log("Minutes: ", minutes);

  spin(element, "hours", (minutes / 60 / 12) % 12); // 180 / 60 / 12 = 0.25 % 12 = 0.25 * 360deg = 90 => set hour hand to number "3"
  spin(element, "minutes", (minutes / 60) % 60); // Ex:  180 minutes / 60 = 3 % 60 = 3 (set minute hand to position "3 * 360deg" on clock) => set minute hand to number "0"
  spin(element, "seconds", minutes % 60); // Ex:  110.5 minutes % 60 = 50.5 (set second hand to position "50.5 * 360 deg" on clock)
};

document.addEventListener("DOMContentLoaded", function () {
  let clock = document.querySelector(".clock");
  if (clock) {
    let timezoneOffset = new Date().getTimezoneOffset(); // in minutes (to set your utc(+3 in our case) => -180)
    setClock(clock, timezoneOffset);
  }
});
