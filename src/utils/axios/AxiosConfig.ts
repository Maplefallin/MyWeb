import axios from "axios";

const all_url:string  = import.meta.env.VITE_BASE_REQUEST_URL

const instance  = axios.create(
    {
        baseURL: all_url,
        timeout: 1000*1
    
    }
)

export default instance