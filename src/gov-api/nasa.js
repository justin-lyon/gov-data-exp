const axios = require('axios')
const creds = require('../../config/keys')
const naxios = axios.create({
  baseUrl: '',
  params: {
    api_key: creds.API_KEY
  }
})

module.exports = naxios
// naxios.get('/')
//   .then(res => {
//     console.log('res => ', res)
//   })
//   .catch(err => {
//     console.error(err.message, err.stack)
//   })
