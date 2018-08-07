"use strict";
const Constants = require ("../../../Constants");
const PrideGuardianBase = require("../setCNS/PrideGuardian");

class PrideGuardian extends PrideGuardianBase {
  constructor (game) {
    super(game, "Pride Guardian", "Magic 2012", "M12");
  }
}

module.exports = PrideGuardian;
