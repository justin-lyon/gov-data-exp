const axios = require('axios')
const creds = require('../../config/keys')
const fbios = axios.create({
  baseUrl: 'https://api.usa.gov/crime/fbi/sapi',
  params: {
    api_key: creds.API_KEY
  }
})

fbios.get('/api/participation/national')
  .then(res => {
    console.log('res => ', res)
  })
  .catch(err => {
    console.error('Error: ' + err.message, err.stack)
  })
