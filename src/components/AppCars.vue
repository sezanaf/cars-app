<template>
  <div>
    <h2>Car List</h2>
    <table class="table">
      <tr>
        <th>Brand</th>
        <th>Model</th>
        <th>Year</th>
        <th>Number of doors</th>
        <th>Maximum speed</th>
        <th>Automatic/Manual</th>
        <th>Engine</th>
      </tr>
      <tr v-for="car in cars" :key="car.id">
        <td>{{ car.brand }}</td>
        <td>{{ car.model }}</td>
        <td>{{ car.year }}</td>
        <td>{{ car.numberOfDoors }}</td>
        <td>{{ car.maxSpeed }}</td>
        <td>{{ car.isAutomatic ? "Automatic" : "Manual" }}</td>
        <td>{{ car.engine }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import CarsService from "../services/CarsService";

export default {
  data() {
    return {
      cars: null,
    };
  },
  async created() {
    const cars = await CarsService.getAll();
    this.cars = cars;
  },
};
</script>
