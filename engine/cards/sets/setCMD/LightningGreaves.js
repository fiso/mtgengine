"use strict";
const Constants = require ("../../../Constants");
const LightningGreavesBase = require("../setARC/LightningGreaves");

class LightningGreaves extends LightningGreavesBase {
  constructor(game) {
    super(game, "Lightning Greaves", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = LightningGreaves;
