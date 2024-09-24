interface HTTPRequestType {
    HTTPGet: <T>(url: string) => Promise<T>
    HTTPPost: <T, R>(url: string, data: R) => Promise<T>
    HTTPPut: <T, R>(url: string, data: R) => Promise<T>
}

export default HTTPRequestType;