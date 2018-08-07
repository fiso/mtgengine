"use strict";
const Constants = require ("../../../Constants");
const BasaltMonolithBase = require("../setCM2/BasaltMonolith");

class BasaltMonolith extends BasaltMonolithBase {
  constructor (game) {
    super(game, "Basalt Monolith", "Revised Edition", "3ED");
  }
}

module.exports = BasaltMonolith;
