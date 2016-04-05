"use strict";
const Constants = require ("../../../Constants");
const SuturePriestBase = require("../setpMGD/SuturePriest");

class SuturePriest extends SuturePriestBase {
  constructor(game) {
    super(game, "Suture Priest", "New Phyrexia", "NPH");
  }
}

module.exports = SuturePriest;
