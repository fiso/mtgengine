"use strict";
const Constants = require ("../../../Constants");
const RodofRuinBase = require("../setM14/RodofRuin");

class RodofRuin extends RodofRuinBase {
  constructor (game) {
    super(game, "Rod of Ruin", "Tenth Edition", "10E");
  }
}

module.exports = RodofRuin;
