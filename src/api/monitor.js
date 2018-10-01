const handler = require('../utils/handler')
const {
  MONITOR_CPU,
  MONITOR_IO,
  MONITOR_NAT,
  MONITOR_NET
} = require('./index')

class Monitor {
  constructor(email, token) {
    this.email = email
    this.token = token
  }

  getCPU({ uuid, startTime, endTime = new Date(), unit }) {
    return handler(MONITOR_CPU, {
      email: this.email,
      token: this.token,
      uuid,
      startTime,
      endTime,
      unit
    })
  }

  getNet({ uuid, startTime, endTime = new Date(), unit }) {
    return handler(MONITOR_NET, {
      email: this.email,
      token: this.token,
      uuid,
      startTime,
      endTime,
      unit
    })
  }

  getNat({ uuid, startTime, endTime = new Date(), unit }) {
    return handler(MONITOR_NAT, {
      email: this.email,
      token: this.token,
      uuid,
      startTime,
      endTime,
      unit
    })
  }

  getIO({ uuid, startTime, endTime = new Date(), unit }) {
    return handler(MONITOR_IO, {
      email: this.email,
      token: this.token,
      uuid,
      startTime,
      endTime,
      unit
    })
  }
}

module.exports = Monitor
