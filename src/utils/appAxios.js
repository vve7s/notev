// const axios = require('axios')
const axios = require('axios').default;


// axios.defaults.baseURL = 'http://api.vve7s.com/note';


export const appAxios = axios.create({
  baseURL : "http://api.vve7s.store/note",

})
