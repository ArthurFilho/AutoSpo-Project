import axios from "axios";

const Api = axios.create({
    baseURL:"localhost://localhost:5000"
});



export default Api;