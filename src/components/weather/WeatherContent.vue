<template>
  <div class="weather-container">
    <ContentHeader />
    <CitySelector :cities="cities" />
    <WeatherList :targetCities="targetCities" />
  </div>
</template>

<script>
import ContentHeader from "./ContentHeader";
import CitySelector from "./CitySelector";
import WeatherList from "./WeatherList";
export default {
  name: "weatherContent",
  components: {
    ContentHeader,
    CitySelector,
    WeatherList,
  },
  data() {
    return {
      cities: [
        { code: "Seoul", label: "서울" },
        { code: "Tokyo", label: "도쿄" },
        { code: "Beijing", label: "북경" },
        { code: "Moscow", label: "모스크바" },
        { code: "London", label: "런던" },
        { code: "Deli", label: "델리" },
        { code: "NewYork", label: "뉴욕" },
      ],
    };
  },
  computed: {
    targetCities() {
      return this.cities.filter((city) => city.selected);
    },
  },
};
</script>

<style scoped></style>
