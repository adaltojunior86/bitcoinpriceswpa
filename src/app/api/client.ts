import axios from 'axios';

export interface Request {
  url: string
}

const URL_BASE: string = "https://api.blockchain.info/";

export class ApiClient {
  get = ({ url }: Request) => {
    return axios.get(`${URL_BASE}${url}`);
  }
}
