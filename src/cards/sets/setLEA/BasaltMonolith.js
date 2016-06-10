"use strict";
const Constants = require ("../../../Constants");
const BasaltMonolithBase = require("../setCED/BasaltMonolith");

class BasaltMonolith extends BasaltMonolithBase {
  constructor (game) {
    super(game, "Basalt Monolith", "Limited Edition Alpha", "LEA");
  }
}

module.exports = BasaltMonolith;
