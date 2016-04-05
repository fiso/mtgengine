"use strict";
const Constants = require ("../../../Constants");
const RodofRuinBase = require("../set6ED/RodofRuin");

class RodofRuin extends RodofRuinBase {
  constructor(game) {
    super(game, "Rod of Ruin", "Magic 2010", "M10");
  }
}

module.exports = RodofRuin;
