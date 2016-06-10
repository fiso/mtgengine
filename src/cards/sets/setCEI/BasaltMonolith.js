"use strict";
const Constants = require ("../../../Constants");
const BasaltMonolithBase = require("../setCED/BasaltMonolith");

class BasaltMonolith extends BasaltMonolithBase {
  constructor (game) {
    super(game, "Basalt Monolith", "International Collector's Edition", "CEI");
  }
}

module.exports = BasaltMonolith;
