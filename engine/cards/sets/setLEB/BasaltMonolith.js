"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BasaltMonolithBase = require("../setCED/BasaltMonolith.js");

class BasaltMonolith extends BasaltMonolithBase {
  constructor(game) {
    super(game, "Basalt Monolith", "Limited Edition Beta", "LEB");
  }
}

module.exports = BasaltMonolith;
