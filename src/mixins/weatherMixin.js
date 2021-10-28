const weatherMixin = {
  methods: {
    showTemperature(temperature = 0, type = "celcius") {
      if (type === "celcius") {
        return (temperature - 273.15).toFixed(1);
      }
    },
  },
};

export default weatherMixin;
