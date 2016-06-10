"use strict";
const Constants = require ("../../../Constants");
const RodofRuinBase = require("../set6ED/RodofRuin");

class RodofRuin extends RodofRuinBase {
  constructor (game) {
    super(game, "Rod of Ruin", "Revised Edition", "3ED");
  }
}

module.exports = RodofRuin;
