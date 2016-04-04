"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BasaltMonolithBase = require("../setCED/BasaltMonolith.js");

class BasaltMonolith extends BasaltMonolithBase {
  constructor(game) {
    super(game, "Basalt Monolith", "International Collector's Edition", "CEI");
  }
}

module.exports = BasaltMonolith;
