import axios from "axios";


export const api = axios.create({
  baseURL: "https://sandbox.asaas.com/api/v3/payments/"
})