const utils = require("./Utils")
const rules_matcher = require("./rules_matcher")

exports.setup=(data)=>{
    return {
    source: utils.getDataToMatch(data),
    matchIndex: 10,
    decimals: 2,
    showOriginal: true,
    verbose: true,
    keys: rules_matcher.keys
  }}