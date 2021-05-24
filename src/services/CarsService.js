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
}

export default new CarsService();
