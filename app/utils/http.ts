import axios from "axios";


const baseUrl = "http://localhost:8080/api/v1";

// export const http = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_API_URL
// })

export const http = axios.create({
    baseURL: baseUrl
})