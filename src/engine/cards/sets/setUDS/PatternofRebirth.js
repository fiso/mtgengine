"use strict";
const Constants = require ("../../../Constants");
const PatternofRebirthBase = require("../setWC00/PatternofRebirth");

class PatternofRebirth extends PatternofRebirthBase {
  constructor (game) {
    super(game, "Pattern of Rebirth", "Urza's Destiny", "UDS");
  }
}

module.exports = PatternofRebirth;
