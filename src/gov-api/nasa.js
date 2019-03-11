const axios = require('axios')
const creds = require('../../config/keys')
const naxios = axios.create({
  baseURL: 'https://ssd-api.jpl.nasa.gov/'
})

module.exports = naxios
// naxios.get('/')
//   .then(res => {
//     console.log('res => ', res)
//   })
//   .catch(err => {
//     console.error(err.message, err.stack)
//   })
