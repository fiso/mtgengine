"use strict";
const Constants = require ("../../../Constants");
const BeastofBurdenBase = require("../set9ED/BeastofBurden");

class BeastofBurden extends BeastofBurdenBase {
  constructor (game) {
    super(game, "Beast of Burden", "Seventh Edition", "7ED");
  }
}

module.exports = BeastofBurden;
