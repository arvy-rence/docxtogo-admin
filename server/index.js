import axios from "axios"

export default axios.create({
  // baseURL: "http://localhost:8092/api",
  baseURL: "https://dtg-api.herokuapp.com/api"
})