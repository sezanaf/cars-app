<template>
  <form @submit.prevent="submitForm" @reset="resetForm">
    <div>
      <label for="brand">Brand</label>

      <input
        id="brand"
        name="brand"
        type="text"
        required
        v-model="car.brand"
        minlength="2"
      />
    </div>
    <div>
      <label for="model">Model</label>

      <input
        id="model"
        name="model"
        type="text"
        minlength="2"
        required
        v-model="car.model"
      />
    </div>
    <div>
      <label for="year">Year</label>

      <select id="year" name="year" required="required" v-model="car.year">
        <option v-for="year in years" :value="year" :key="year">{{
          year
        }}</option>
      </select>
    </div>
    <div>
      <label for="speed">Maximum Speed</label>

      <input id="speed" name="speed" type="number" v-model="car.maxSpeed" />
    </div>
    <div>
      <label for="doors">Number of Doors</label>

      <input
        id="doors"
        name="doors"
        type="number"
        required
        v-model="car.numberOfDoors"
      />
    </div>
    <div>
      <label class="col-4 col-form-label">Engine</label>

      <div>
        <label class="form-check-label">
          <input
            name="engine"
            type="radio"
            required
            value="electric"
            v-model="car.engine"
          />
          Electric
        </label>
      </div>
      <div>
        <label>
          <input
            name="engine"
            type="radio"
            required
            value="petrol"
            v-model="car.engine"
          />
          Petrol
        </label>
      </div>
      <div>
        <label>
          <input
            name="engine"
            type="radio"
            required
            value="hybrid"
            v-model="car.engine"
          />
          Hybrid
        </label>
      </div>
      <div>
        <label>
          <input
            name="engine"
            type="radio"
            required
            value="diesel"
            v-model="car.engine"
          />
          Diesel
        </label>
      </div>
    </div>

    <div>
      <label>
        <input
          name="automatic"
          type="checkbox"
          value="true"
          v-model="car.isAutomatic"
        />
        Automatic
      </label>
    </div>

    <div>
      <button name="submit" type="submit" class="btn btn-primary">
        Submit
      </button>
      <button name="reset" type="reset" class="btn btn-secondary">Reset</button>
      <button
        name="preview"
        type="button"
        @click="preview"
        class="btn btn-info"
      >
        Preview
      </button>
    </div>
  </form>
</template>

<script>
import CarsService from "../services/CarsService";

export default {
  data() {
    return {
      years: Array(29)
        .fill(1990)
        .map((n, i) => n + i),

      car: this.getDefaultCar(),
    };
  },

  created() {
    CarsService.getCar(this.$route.params.id).then((response) => {
      this.car = response.data;
    });
  },

  methods: {
    submitForm() {
      if (this.car.id) {
        this.editCar();
      } else {
        this.addCar();
      }
    },

    addCar() {
      CarsService.addCar(this.car)
        .then((success) => {
          this.redirectToCars();
          console.log(success);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    editCar() {
      CarsService.editCar(this.car)
        .then((success) => {
          this.redirectToCars();
          console.log(success);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    resetForm() {
      this.car = this.getDefaultCar();
    },

    redirectToCars() {
      this.$router.push({ name: "cars" });
    },

    getDefaultCar() {
      return {
        brand: "",
        model: "",
        maxSpeed: "",
        year: "1990",
        isAutomatic: false,
        numberOfDoors: "",
        engine: "",
      };
    },

    preview() {
      alert(`
        Brand: ${this.car.brand}
        Model: ${this.car.model}
        Year: ${this.car.year}
        Maximum Speed: ${this.car.maxSpeed}
        Number of Doors: ${this.car.numberOfDoors}
        Engine: ${this.car.model}
        ${this.car.isAutomatic ? "Automatic" : "Manual"}
      `);
    },
  },
};
</script>
