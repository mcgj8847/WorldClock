function timeNow() {
  let nameCity1Element = document.querySelector("#city");
  if (nameCity1Element) {
    let nameCity1DateElement = nameCity1Element.querySelector(".date");
    let nameCity1TimeElement = nameCity1Element.querySelector(".time");
    let cityTime = moment().tz("America/Los_Angeles");
    nameCity1TimeElement.innerHTML = cityTime.format(
      "HH:mm:ss  [<small>]A[</small>]"
    );
    nameCity1DateElement.innerHTML = cityTime.format("dddd Do MMMM YYYY");
  }
  let nameCity2Element = document.querySelector("#Sydney");
  if (nameCity2Element) {
    let nameCity2DateElement = nameCity2Element.querySelector("#date2");
    let nameCity2TimeElement = nameCity2Element.querySelector("#time2");
    let cityTime2 = moment().tz("Australia/Sydney");
    nameCity2TimeElement.innerHTML = cityTime2.format(
      "HH:mm:ss  [<small>]A[</small>]"
    );
    nameCity2DateElement.innerHTML = cityTime2.format("dddd Do MMMM YYYY");
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityhour = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#places");
  citiesElement.innerHTML = `<div class="city" id="city3">
        <div>
          <h2 id="nameCity3"> ${cityName}</h2>
          <div class="date" id="date3">${cityhour.format(
            "dddd Do MMMM YYYY"
          )} </div>
        </div>
        <div class="time" id="time3">${cityhour.format(
          "HH:mm:ss"
        )} <small>${cityhour.format("A")} </small></div>
      </div>
      <a href="/"><small>All cities</small></>
`;
}
setInterval(timeNow, 1000);
let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener("change", updateCity);
