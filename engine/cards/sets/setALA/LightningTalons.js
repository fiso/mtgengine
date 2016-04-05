"use strict";
const Constants = require ("../../../Constants");
const LightningTalonsBase = require("../setM14/LightningTalons");

class LightningTalons extends LightningTalonsBase {
  constructor(game) {
    super(game, "Lightning Talons", "Shards of Alara", "ALA");
  }
}

module.exports = LightningTalons;
