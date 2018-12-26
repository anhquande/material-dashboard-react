import { CLEAR_TOKEN, SET_TOKEN } from "./constants";

export function setToken(token) {
  return {
    type: SET_TOKEN,
    token
  };
}

export function clearToken() {
  return {
    type: CLEAR_TOKEN
  };
}
