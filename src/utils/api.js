const axios = require('axios')

const instance = axios.create({
  baseURL: 'https://i.hostker.com/api',
  timeout: 1000,
  headers: { 'CONTENT-TYPE': 'application/x-www-form-urlencoded' }
})

module.exports = instance
