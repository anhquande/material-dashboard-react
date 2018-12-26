import { CLEAR_API_HOST, SET_API_HOST } from "./constants";

export function setApiHost(apiHost) {
  return {
    type: SET_API_HOST,
    apiHost
  };
}

export function clearApiHost() {
  return {
    type: CLEAR_API_HOST
  };
}
