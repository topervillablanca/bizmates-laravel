import { defineStore } from "pinia";

export const allWeatherStore = defineStore("weatherStore", {
  state: () => {
    return {
      errors: {},
    };
  },
  actions: {
    async getCurrentWeather() {
      const res = await fetch("/api/posts");
      const data = await res.json();

      return data;
    },
  },
});
