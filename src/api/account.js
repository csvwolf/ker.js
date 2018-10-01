const handler = require('../utils/handler')
const { ACCOUNT_QUOTA, ACCOUNT_BALANCE } = require('./index')

class Account {
  constructor(email, token) {
    this.email = email
    this.token = token
  }

  getQuota() {
    return handler(ACCOUNT_QUOTA, {
      email: this.email,
      token: this.token
    })
  }

  getBalance() {
    return handler(ACCOUNT_BALANCE, {
      email: this.email,
      token: this.token
    })
  }
}

module.exports = Account
