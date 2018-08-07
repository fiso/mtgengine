"use strict";
const Constants = require ("../../../Constants");
const RodofRuinBase = require("../setM14/RodofRuin");

class RodofRuin extends RodofRuinBase {
  constructor (game) {
    super(game, "Rod of Ruin", "Revised Edition", "3ED");
  }
}

module.exports = RodofRuin;
