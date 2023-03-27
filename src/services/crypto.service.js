import axios from "axios"
import { URL_CRYPTO } from "../constants/constants"

export function cryptoService() {
  return axios.get(URL_CRYPTO)
}
