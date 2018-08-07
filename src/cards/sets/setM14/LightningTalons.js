"use strict";
const Constants = require ("../../../Constants");
const LightningTalonsBase = require("../setBBD/LightningTalons");

class LightningTalons extends LightningTalonsBase {
  constructor (game) {
    super(game, "Lightning Talons", "Magic 2014", "M14");
  }
}

module.exports = LightningTalons;
