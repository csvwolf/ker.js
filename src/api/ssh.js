const handler = require('../utils/handler')
const { SSH_LIST, SSH_CREATE, SSH_DELETE } = require('./index')

class SSH {
  constructor(email, token) {
    this.email = email
    this.token = token
  }

  get() {
    return handler(SSH_LIST, {
      email: this.email,
      token: this.token
    })
  }

  create({ name, key }) {
    return handler(SSH_CREATE, {
      email: this.email,
      token: this.token,
      name,
      key
    })
  }

  delete() {
    return handler(SSH_DELETE, {
      email: this.email,
      token: this.token
    })
  }
}

module.exports = SSH
