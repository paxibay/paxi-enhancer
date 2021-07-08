
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./capital-budgeting-shim.cjs.production.min.js')
} else {
  module.exports = require('./capital-budgeting-shim.cjs.development.js')
}
