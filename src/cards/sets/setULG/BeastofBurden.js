"use strict";
const Constants = require ("../../../Constants");
const BeastofBurdenBase = require("../set8ED/BeastofBurden");

class BeastofBurden extends BeastofBurdenBase {
  constructor(game) {
    super(game, "Beast of Burden", "Urza's Legacy", "ULG");
  }
}

module.exports = BeastofBurden;
