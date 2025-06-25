function timeNow() {
  let nameCity1Element = document.querySelector("#city");
  let nameCity1DateElement = nameCity1Element.querySelector(".date");
  let nameCity1TimeElement = nameCity1Element.querySelector(".time");
  let cityTime = moment().tz("America/Los_Angeles");
  nameCity1TimeElement.innerHTML = cityTime.format(
    "HH:mm:ss  [<small>]A[</small>]"
  );
  nameCity1DateElement.innerHTML = cityTime.format("dddd Do MMMM YYYY");

  let nameCity2Element = document.querySelector("#Sydney");
  let nameCity2DateElement = nameCity2Element.querySelector("#date2");
  let nameCity2TimeElement = nameCity2Element.querySelector("#time2");
  let cityTime2 = moment().tz("Australia/Sydney");
  nameCity2TimeElement.innerHTML = cityTime2.format(
    "HH:mm:ss  [<small>]A[</small>]"
  );
  nameCity2DateElement.innerHTML = cityTime2.format("dddd Do MMMM YYYY");
}
timeNow();
setInterval(timeNow, 1000);
