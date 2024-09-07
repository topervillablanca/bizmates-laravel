<script>
import axios from "axios";

export default {
  el: "#app",
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/forecast?lat=35.67&lon=139.65&appid=691ed62537f1ab261e22df335732ace0"
      )
      .then((response) => (this.info = response.data.list));
  },
};
</script>

<template>
  <main>
    <h1 class="title">Latest Weather for Tokyo Japan</h1>
    <div id="app">
      <table>
        <th>Date</th>
        <th>Description</th>
        <th>Wind Speed</th>
        <th>Gust</th>
        <th>Visibility</th>
        <th>Temperature</th>
        <th>Minimum Temperature</th>
        <th>Maximum Temperature</th>
        <tr
          v-for="(entity, i) in info"
          :key="`entity-${entity}${i}`"
          class="table-rows"
        >
          <td>{{ entity.dt_txt }}</td>
          <td>{{ entity.weather[0].description }}</td>
          <td>{{ entity.wind.speed }}</td>
          <td>{{ entity.wind.gust }}</td>
          <td>{{ entity.visibility }}</td>
          <td>{{ entity.main.temp }}</td>
          <td>{{ entity.main.temp_min }}</td>
          <td>{{ entity.main.temp_max }}</td>
        </tr>
      </table>
    </div>
  </main>
</template>
