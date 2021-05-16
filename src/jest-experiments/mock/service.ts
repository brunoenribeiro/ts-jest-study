import axios from 'axios';

export default class Service {
  static async all() {
    const { data } = await axios.get('/endpoint');
    return data;
  }
}