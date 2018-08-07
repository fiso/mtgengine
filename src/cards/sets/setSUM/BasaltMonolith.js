"use strict";
const Constants = require ("../../../Constants");
const BasaltMonolithBase = require("../setCM2/BasaltMonolith");

class BasaltMonolith extends BasaltMonolithBase {
  constructor (game) {
    super(game, "Basalt Monolith", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = BasaltMonolith;
