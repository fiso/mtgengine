"use strict";
const Constants = require ("../../../Constants");
const HighPriestofPenanceBase = require("../setC18/HighPriestofPenance");

class HighPriestofPenance extends HighPriestofPenanceBase {
  constructor (game) {
    super(game, "High Priest of Penance", "Gatecrash", "GTC");
  }
}

module.exports = HighPriestofPenance;
