"use strict";
const Constants = require ("../../../Constants");
const BeastofBurdenBase = require("../set9ED/BeastofBurden");

class BeastofBurden extends BeastofBurdenBase {
  constructor (game) {
    super(game, "Beast of Burden", "Eighth Edition", "8ED");
  }
}

module.exports = BeastofBurden;
