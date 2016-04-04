"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TruefirePaladinBase = require("../setDDL/TruefirePaladin.js");

class TruefirePaladin extends TruefirePaladinBase {
  constructor(game) {
    super(game, "Truefire Paladin", "Gatecrash", "GTC");
  }
}

module.exports = TruefirePaladin;
