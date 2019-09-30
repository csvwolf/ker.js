const DNS = require('./api/dns')
const Account = require('./api/account')
const Monitor = require('./api/monitor')
const Server = require('./api/server')
const SSH = require('./api/ssh')

class Ker {
  constructor({ email, token }) {
    this.email = email
    this.token = token
    this.dns = new DNS(email, token)
    this.monitor = new Monitor(email, token)
    this.server = new Server(email, token)
    this.ssh = new SSH(email, token)
    this.account = new Account(email, token)
  }

  test() {
    try {
      this.account.getQuota()
    } catch(e) {
      return false
    }
    return true
  }
}

module.exports = Ker
