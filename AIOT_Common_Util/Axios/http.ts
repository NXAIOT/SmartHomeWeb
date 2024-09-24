import axios, {AxiosRequestConfig, AxiosResponse} from "axios"

axios.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = <string>localStorage.getItem("shoppingMacComputer") || ""
    if (token.trim().length) {
        config.headers.Authorization = token
    }
    return config
},error => Promise.reject(error))

axios.interceptors.response.use((res: AxiosResponse) => {
    if (res.status !== 200) {
        return Promise.reject(res.statusText)
    }
    return res
}, error => Promise.reject(error))

export default axios