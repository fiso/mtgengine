"use strict";
const Constants = require ("../../../Constants");
const RodofRuinBase = require("../set6ED/RodofRuin");

class RodofRuin extends RodofRuinBase {
  constructor(game) {
    super(game, "Rod of Ruin", "Seventh Edition", "7ED");
  }
}

module.exports = RodofRuin;
