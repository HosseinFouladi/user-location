import axios from "axios";

//setup axios default setting
const ApiCall=axios.create({
    baseURL:'http://localhost:8000/',
})

export default ApiCall