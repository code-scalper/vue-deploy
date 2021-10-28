<template>
  <li class="weather-item">
    <h3>{{ city.label }}</h3>
    <p class="temperature">{{ weather.temperature }}&deg;c</p>
    <p class="info">
      <img :src="iconSrc" alt="01d" />
      <span>습도-{{ weather.humidity }}</span>
      <span>바람-{{ weather.wind }}m/s</span>
    </p>
  </li>
</template>

<script>
import axios from "axios";
import weatherMixin from "@/mixins/weatherMixin.js";
export default {
  name: "weatherItem",
  mixins: [weatherMixin],
  props: {
    city: Object,
  },
  data() {
    return {
      appId: "cf312e5b3b7284fcab2c5e814f670952",
      apiUrl: "https://api.openweathermap.org/data/2.5/weather",
      iconUrl: "http://openweathermap.org/img/wn/",
      iconExt: ".png",
      weather: {},
    };
  },
  computed: {
    iconSrc() {
      return `${this.iconUrl}${this.weather.icon || "13d"}${this.iconExt}`;
    },
    requestUrl() {
      const API_KEY = process.env.VUE_APP_API_KEY;
      return `${this.apiUrl}?q=${this.city.code}&appid=${API_KEY}`;
    },
  },
  mounted() {
    this.getWeatherInfo();
  },
  methods: {
    async getWeatherInfo() {
      const weather = await axios.get(this.requestUrl);
      this.weather.wind = weather.data.wind.speed;
      this.weather.humidity = weather.data.main.humidity;
      this.weather.temperature = this.showTemperature(weather.data.main.temp);
      this.weather.icon = weather.data.weather[0].icon;
      console.log(weather, "weather");
    },
  },
};
</script>

<style scoped>
.weather-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;
  padding: 1em;
}
.weather-item h3 {
  font-size: 14px;
  color: #333;
}
.temperature {
  font-size: 36px;
}
.info {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
.info img {
  width: 30px;
}
.info * {
  margin-right: 0.4em;
}
</style>
