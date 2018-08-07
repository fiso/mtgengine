"use strict";
const Constants = require ("../../../Constants");
const LightningGreavesBase = require("../setCM2/LightningGreaves");

class LightningGreaves extends LightningGreavesBase {
  constructor (game) {
    super(game, "Lightning Greaves", "Kaladesh Inventions", "MPS");
  }
}

module.exports = LightningGreaves;
