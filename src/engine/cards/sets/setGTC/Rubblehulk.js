"use strict";
const Constants = require ("../../../Constants");
const RubblehulkBase = require("../setC18/Rubblehulk");

class Rubblehulk extends RubblehulkBase {
  constructor (game) {
    super(game, "Rubblehulk", "Gatecrash", "GTC");
  }
}

module.exports = Rubblehulk;
