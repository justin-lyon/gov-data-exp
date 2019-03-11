const api = require('./gov-api')

// api.fbi.get('api/participation/national')
//   .then(res => {
//     console.log('res => ', JSON.stringify(res.data, null, 2))
//   })
//   .catch(err => {
//     console.error('Error: ' + err.message, err.stack)
//   })

api.nasa.get('cad.api',
  {
    params: {
      des: 433,
      'date-min': '1900-01-01',
      'date-max': '2100-01-01',
      'dist-max': 0.2
    }
  })
  .then(res => {
    console.log('res => ', JSON.stringify(res.data, null, 2))
  })
  .catch(err => {
    console.error('Error: ' + err.message, err.stack)
  })
