import axios from "axios";

class CarsService {
  constructor() {
    const instance = axios.create({
      baseURL: "http://localhost:3000/api/",
    });

    this.client = instance;
  }

  async getAll() {
    const { data } = await this.client.get("cars");

    return data;
  }

  addCar(car) {
    return this.client.post("cars", car);
  }

  getCar(id) {
    return this.client.get(`cars/${id}`);
  }

  editCar(car) {
    return this.client.put(`cars/${car.id}`, car);
  }

  deleteCar(id) {
    return this.client.delete(`cars/${id}`);
  }
}

export default new CarsService();
