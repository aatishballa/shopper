import axios from 'axios'

const config = {
  baseURL: 'http://localhost:4000'
}

const instance = axios.create(config)

instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (window.sessionStorage.getItem('accessKey')) {
    instance.defaults.headers.common.Authorization = 'Bearer ' + window.sessionStorage.getItem('accessKey')
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export default instance