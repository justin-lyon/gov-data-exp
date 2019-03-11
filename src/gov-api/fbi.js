const axios = require('axios')
const creds = require('../../config/keys')
const fbios = axios.create({
  baseURL: 'https://api.usa.gov/crime/fbi/sapi',
  params: {
    api_key: creds.API_KEY
  }
})

module.exports = fbios
