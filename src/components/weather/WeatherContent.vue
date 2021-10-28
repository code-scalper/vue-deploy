<template>
  <div class="weather-container">
    <ContentHeader />
    <CitySelector :cities="cities" @setWeatherList="setWeatherList" />
    <WeatherList :weatherList="weatherList" />
  </div>
</template>

<script>
import weatherMixin from "@/mixins/weatherMixin.js";
import ContentHeader from "./ContentHeader";
import CitySelector from "./CitySelector";
import WeatherList from "./WeatherList";
export default {
  name: "weatherContent",
  mixins: [weatherMixin],
  components: {
    ContentHeader,
    CitySelector,
    WeatherList,
  },
  data() {
    return {
      cities: [
        { code: "Seoul", label: "서울", selected: false },
        { code: "Tokyo", label: "도쿄", selected: false },
        { code: "Beijing", label: "북경", selected: false },
        { code: "Moscow", label: "모스크바", selected: false },
        { code: "London", label: "런던", selected: false },
        { code: "Deli", label: "델리", selected: false },
        { code: "Minsk", label: "민스크", selected: false },
        { code: "Hongkong", label: "홍콩", selected: false },
        { code: "Yakutsk", label: "야크추크", selected: false },
      ],
      weatherList: [],
    };
  },
  methods: {
    async setWeatherList(city) {
      const add = city.selected;
      if (!add) {
        const index = this.weatherList.findIndex(
          (weather) => weather.code === city.code
        );
        this.weatherList.splice(index, 1);
      } else {
        const weather = await this.getWeatherInfo(city);
        this.weatherList.push(weather);
      }
    },
  },
};
</script>

<style scoped></style>
