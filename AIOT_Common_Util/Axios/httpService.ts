import axios from './http'
import HTTPRequestType from "./HTTPRequestType";

function useHTTPRequest(): HTTPRequestType {
    function HTTPGet<T>(url: string): Promise<T> {
        return axios.get<T, T>(url).then((response: T) => {
            return response;
        }).catch((error) => {
            return error;
        });
    }

    function HTTPPost<T, R>(url: string, data: R): Promise<T> {
        return axios.post<T, T>(url, data).then((response: T) => {
            return response;
        }).catch((error) => {
            return error;
        })
    }

    function HTTPPut<T, R>(url: string, data: R): Promise<T> {
        return axios.put<T, T>(url, data).then((response: T) => {
            return response;
        }).catch((error) => {
            return error;
        })
    }

    return {HTTPGet, HTTPPost, HTTPPut}
}

export default useHTTPRequest;

