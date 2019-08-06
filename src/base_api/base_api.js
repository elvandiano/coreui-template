import axios from 'axios';
import Vue from 'vue'

/**
 * LOAD DATA
 * set Axios Wrapper API Base End Point
 */

let api_uleekareng = process.env.VUE_APP_UlEEKARENG_API;
let api_ayamtangkap = process.env.VUE_APP_AYAM_TANGKAP_API;

export const HTTP = axios.create({
  baseURL: api_uleekareng,
});

export const API_Transaction = axios.create({
  baseURL: api_uleekareng
});

export const data_list = axios.create({
  baseURL: api_uleekareng
});

export const API_UPLOAD = axios.create({
  baseURL: api_ayamtangkap
});

/**
 * LOAD DATA
 * Take the token from the localStorage and Set the Token to HEADERS by Interceptors
 */
API_UPLOAD.interceptors.request.use(
  config => {
    config.headers = {
      'Authorization': 'Bearer ' + localStorage.getItem("token"),
      'appsource': 'WEB_AIRSALE',
      'Content-Type': 'multipart/form-data'
    }
    return config;
  },
  error => Promise.reject(error)
);

data_list.interceptors.request.use(
  config => {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem("token");
    return config;
  },
  error => Promise.reject(error)
);

API_Transaction.interceptors.request.use(
  config => {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem("token");
    console.log("req",config);
    return config;
  },
  error => Promise.reject(error)
);

API_Transaction.interceptors.response.use(
  response => {
    // console.log("res", response.status);
    // if(response.status === 200){
    //
    // }
    return response;

  },
  error => {
    Promise.reject(error);
    console.log("er", error.response.status);
    if (error.response.status === 401) {
      // console.log("er", error.response.status);
      Vue.swal({
        title: "Error",
        text: "Your session has already invalid, please login again!!",
        type: 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OKE'
      }).then((result) => {
        if (result.value) {
          localStorage.removeItem("token");
          location.replace('/');
        }
      });
    }
  }
);

