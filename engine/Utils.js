"use strict";
const Constants = require("./Constants");
const assert = require("assert");

function isNumeric (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function getCostTypeFromToken (token) {
  if (isNumeric(token)) {
    return Constants.costs.GENERIC;
  }

  assert(Constants.costTokens[token]);
  return Constants.costTokens[token];
}

module.exports = {
  isNumeric, getCostTypeFromToken
};
