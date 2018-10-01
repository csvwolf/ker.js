const api = require('./api')

module.exports = async (uri, params) => {
  const result = await api.post(uri, params).then(({ data }) => data)
  if (!result.success) throw Error(result.errorMessage)
  return result
}
