const handler = require('../utils/handler')
const {
  DNS_ADD,
  DNS_DELETE,
  DNS_EDIT,
  DNS_LIST
} = require('./index')

class DNS {
  constructor(email, token) {
    this.email = email
    this.token = token
  }

  list({ domain }) {
    return handler(DNS_LIST, {
      email: this.email,
      token: this.token,
      domain
    })
  }

  add({ domain, header, type, data, ttl, priority }) {
    return handler(DNS_ADD, {
      email: this.email,
      token: this.token,
      domain,
      header,
      type,
      data,
      ttl,
      priority
    })
  }

  edit({ id, data, ttl, priority }) {
    return handler(DNS_EDIT, {
      email: this.email,
      token: this.token,
      id,
      data,
      ttl,
      priority
    })
  }

  delete({ id }) {
    return handler(DNS_DELETE, {
      email: this.email,
      token: this.token,
      id
    })
  }
}

module.exports = DNS
