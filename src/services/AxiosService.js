import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})


export const SandboxServer = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/posts',
  timeout: 8000
})

export const testapi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/',
  timeout: 8000
})