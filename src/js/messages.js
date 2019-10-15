'use strict'

const blue = '\x1b[94;1m'
const pink = '\x1b[95;1m'
const reset = '\x1b[0m'

module.exports.infoMsg = (prefix, content) => console.log(`${blue}${prefix}: ${reset}${content}`)
module.exports.warningMsg = (prefix, content) => console.log(`${pink}${prefix}: ${reset}${content}`)
