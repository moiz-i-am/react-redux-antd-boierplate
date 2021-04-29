import axios from "axios";
import { UNAUTHORIZED } from "http-status-codes";

const baseURL = process.env.REACT_APP_API_URL;

export const doGet = (path) =>
  new Promise((resolve, reject) =>
    axios({
      url: path,
      baseURL,
      method: "GET",
      withCredentials: true,
    })
      .then((result) => resolve(result))
      .catch((err) => {
        if (String(path).toLowerCase() !== "/users/me") {
          try {
            if (err.response.status === UNAUTHORIZED) {
              window.location.reload();
            }
          } catch (errorr) {
            console.log(errorr);
          }
          reject(err);
        } else {
          reject(err);
        }
      })
  );

export const doPost = (path, data) =>
  new Promise((resolve, reject) =>
    axios({
      url: path,
      baseURL,
      method: "POST",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
      data,
    })
      .then((result) => resolve(result))
      .catch((err) => {
        if (String(path).toLowerCase() !== "/users/me") {
          if (err.response.status === UNAUTHORIZED) {
            window.location.reload();
          }

          reject(err);
        }
      })
  );

export const doDelete = (path) =>
  new Promise((resolve, reject) =>
    axios({
      url: path,
      baseURL,
      method: "DELETE",
      withCredentials: true,
    })
      .then((result) => resolve(result))
      .catch((err) => {
        if (String(path).toLowerCase() !== "/users/me") {
          if (err.response.status === UNAUTHORIZED) {
            window.location.reload();
          }

          reject(err);
        }
      })
  );
