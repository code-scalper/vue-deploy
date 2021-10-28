<template>
  <ul class="weather-list">
    <WeatherItem v-for="city in targetCities" :key="city.name" :city="city" />
  </ul>
</template>

<script>
import WeatherItem from "./WeatherItem";
export default {
  name: "WeatherList",
  components: {
    WeatherItem,
  },
  props: {
    targetCities: Array,
  },
};
</script>

<style scoped>
.weather-list {
  display: grid;
  margin-top: 1em;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
}
</style>
