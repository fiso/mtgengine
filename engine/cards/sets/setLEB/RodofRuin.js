"use strict";
const Constants = require ("../../../Constants");
const RodofRuinBase = require("../set6ED/RodofRuin");

class RodofRuin extends RodofRuinBase {
  constructor(game) {
    super(game, "Rod of Ruin", "Limited Edition Beta", "LEB");
  }
}

module.exports = RodofRuin;
