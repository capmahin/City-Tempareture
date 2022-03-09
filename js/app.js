const API_KEY = `579b6cfac20f23a4d6b79f431e275be1`;
const searchTemperature = () => {
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};
const displayTemperature = (temperature) => {
  console.log(temperature);
};
