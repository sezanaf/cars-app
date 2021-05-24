<template>
  <div>
    <AppAddCar />
  </div>
</template>

<script>
import AppAddCar from "../components/AppAddCar.vue";
// import { carsService } from "../services/CarsService";
export default {
  components: {
    AppAddCar,
  },
  //   data () {
  //     return {
  //       car: {
  //         brand: '',
  //         model: '',
  //         maxSpeed: 200,
  //         year: 1990,
  //         isAutomatic: false,
  //         numberOfDoors: 4,
  //         engine: 'diesel'
  //       }
  //     }
  //   },
  //   methods: {
  //     addCar () {
  //       cars.add(this.car)
  //         .then((success) => {
  //           this.redirectToCars()
  //         }).catch((error) => {
  //           console.log(error)
  //         })
  //     },
  //     redirectToCars () {
  //       this.$router.push({ name: 'cars' })
  //     }
  //   }
};
</script>
