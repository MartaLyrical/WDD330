const form = document.querySelector(".top-header form");
const input = document.querySelector(".top-header input");
const msg = document.querySelector(".top-header .msg");
const cities = document.querySelector(".result .cities");
const apiKey = "fc8788bce55893d4185902702d8e89b0";




form.addEventListener("submit", e => {
  e.preventDefault();
  let inputVal = input.value;

  const listItems = cities.querySelectorAll(".result .city");
  const listItemsArray = Array.from(listItems);

  if (listItemsArray.length > 0) {
    const filteredArray = listItemsArray.filter(el => {
      let content = "";
      if (inputVal.includes(",")) {
        if (inputVal.split(",")[1].length > 2) {
          inputVal = inputVal.split(",")[0];
          content = el
            .querySelector(".city-name span")
            .textContent.toLowerCase();
        } else {
          content = el.querySelector(".city-name").dataset.name.toLowerCase();
        }
      } else {
        content = el.querySelector(".city-name span").textContent.toLowerCase();
      }
      return content == inputVal.toLowerCase();
    });

    if (filteredArray.length > 0) {
      msg.textContent = `This city is already in the list, choose another one!`;
      form.reset();
      input.focus();
      return;
    }
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
   
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `http://openweathermap.org/img/wn/${weather[0]["icon"]}.png`;
      let sunnyAudio = new Audio();
      sunnyAudio.src = "./sounds/sunny.mp3";
      let lightRainAudio = new Audio();
      lightRainAudio.src = "./sounds/lightRain.mp3";
      let heavyRainAudio = new Audio();
      heavyRainAudio.src = "./sounds/heavyRain.mp3";
      let thunderAudio = new Audio();
      thunderAudio.src = "./sounds/thunder.mp3";
      let windAudio = new Audio();
      windAudio.src = "./sounds/wind.mp3";

      
      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
        <h2 class="city-name" data-name="${name}">
          <span>${name}</span>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src="${icon}" alt="${weather[0]["description"]}">
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
        
         `;
      //console.log(weather[0]["description"]); 
      if(weather[0]["description"] == "overcast clouds"){
        windAudio.play();
        //salt lake city or luanda
      } else if(weather[0]["description"] == "light rain"){
        lightRainAudio.play();
        //suisse or stuttgart
      } else if(weather[0]["description"] == "clear sky"){
        sunnyAudio.play();
        //lisbon
      }else if(weather[0]["description"] == "heavy rain"){
        heavyRainAudio.play();
      } else if (weather[0]["description"] == "few clouds"){
        windAudio.play();
      } else if(weather[0]["description"] == "thunder"){
        thunderAudio.play();
      }else if(weather[0]["description"] == "broken clouds"){
        windAudio.play();
        //luanda
      }else if(weather[0]["description"] == "moderate rain"){
        lightRainAudio.play();
        //suisse or stuttgart
      }else if(weather[0]["description"] == "light intensity shower rain"){
        thunderAudio.play();
        //suisse or stuttgart
      }

      li.innerHTML = markup;
      cities.appendChild(li);
      
    })
    .catch(() => {
      msg.textContent = "City not found! Please try again.";
    });

  msg.textContent = "";
  form.reset();
  input.focus();
});