import { AppState } from "../AppState.js"
import { Jad } from "../models/Jad.js"
import { api } from "./AxiosService.js"

class JadsService {

  async getJads() {
    const res = await api.get('api/ads')
    AppState.jads = res.data.map(j => new Jad(j))
  }

}
export const jadsService = new JadsService