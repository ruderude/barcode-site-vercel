const contentful = require('contentful')
const config = {
  space: 'hn32wshetg5b',
  accessToken: 't1NNyseNNhW4j7oCZuh8apaPrNWEUeOBsUmUjR1dq-0'
}
module.exports = {
  createClient () {
    return contentful.createClient(config)
  }
}
