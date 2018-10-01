const handler = require('../utils/handler')
const {
  SERVERS_LIST,
  SERVER_CREATE,
  SERVER_DELETE,
  SERVER_GET,
  SERVER_REINSTALL,
  SERVER_SET,
  SERVER_SET_POWER
} = require('./index')

class Server {
  constructor(email, token) {
    this.email = email
    this.token = token
  }

  list() {
    return handler(SERVERS_LIST, {
      email: this.email,
      token: this.token
    })
  }

  get({ uuid }) {
    return handler(SERVER_GET, {
      email: this.email,
      token: this.token,
      uuid
    })
  }

  create({ name, memory, area, os, sshKey }) {
    return handler(SERVER_CREATE, {
      email: this.email,
      token: this.token,
      name,
      memory,
      area,
      os,
      sshKey
    })
  }

  setPower({ uuid, power }) {
    return handler(SERVER_SET_POWER, {
      email: this.email,
      token: this.token,
      uuid,
      power
    })
  }

  set({ uuid, closeDiskVirtIO, closeNetVirtIO, iso, bootOrder }) {
    return handler(SERVER_SET, {
      email: this.email,
      token: this.token,
      uuid,
      closeDiskVirtIO,
      closeNetVirtIO,
      iso,
      bootOrder
    })
  }

  reinstall({ uuid, os, sshKey }) {
    return handler(SERVER_REINSTALL, {
      email: this.email,
      token: this.token,
      uuid,
      os,
      sshKey
    })
  }

  delete({ uuid }) {
    return handler(SERVER_DELETE, {
      email: this.email,
      token: this.token,
      uuid
    })
  }
}

module.exports = Server
