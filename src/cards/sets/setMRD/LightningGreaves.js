"use strict";
const Constants = require ("../../../Constants");
const LightningGreavesBase = require("../setARC/LightningGreaves");

class LightningGreaves extends LightningGreavesBase {
  constructor(game) {
    super(game, "Lightning Greaves", "Mirrodin", "MRD");
  }
}

module.exports = LightningGreaves;
