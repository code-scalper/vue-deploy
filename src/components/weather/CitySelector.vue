<template>
  <div>
    <ul class="city-selector">
      <li
        v-for="city in cities"
        :key="city.code"
        :class="{ isSelected: city.selected }"
        @click="selectCity(city)"
      >
        {{ city.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "citySelector",
  props: {
    cities: Array,
  },
  mounted() {
    // console.log(this.cities);
  },
  methods: {
    selectCity(city) {
      city.selected = city.selected ? false : true;
      this.$emit("setWeatherList", city);
    },
  },
};
</script>

<style scoped>
.city-selector {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
.city-selector li {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #efefef;
  padding: 0.3em;
  cursor: pointer;
  font-size: 14px;
}
.isSelected {
  background: #fd1d1d;
  color: #fff;
}
</style>
