"use strict";
const Constants = require ("../../../Constants");
const BasaltMonolithBase = require("../setCED/BasaltMonolith");

class BasaltMonolith extends BasaltMonolithBase {
  constructor (game) {
    super(game, "Basalt Monolith", "Masters Edition IV", "ME4");
  }
}

module.exports = BasaltMonolith;
