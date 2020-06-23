// set up some type connecter that can be used to hit backend
import axios from 'axios'

export default () => { // need to return a connector
  return axios.create({
    baseURL: `http://localhost:8081/`
  })
}
