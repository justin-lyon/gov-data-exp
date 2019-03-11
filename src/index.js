const api = require('./gov-api')

api.fbi.get('/api/participation/national')
  .then(res => {
    console.log('res => ', res)
  })
  .catch(err => {
    console.error('Error: ' + err.message, err.stack)
  })
