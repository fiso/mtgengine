"use strict";
const Constants = require ("../../../Constants");
const TruefirePaladinBase = require("../setDDL/TruefirePaladin");

class TruefirePaladin extends TruefirePaladinBase {
  constructor(game) {
    super(game, "Truefire Paladin", "Gatecrash", "GTC");
  }
}

module.exports = TruefirePaladin;
