import axios from "axios";

//setup axios default setting
const ApiCall=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
})

export default ApiCall