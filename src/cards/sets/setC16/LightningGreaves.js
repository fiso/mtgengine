"use strict";
const Constants = require ("../../../Constants");
const LightningGreavesBase = require("../setCM2/LightningGreaves");

class LightningGreaves extends LightningGreavesBase {
  constructor (game) {
    super(game, "Lightning Greaves", "Commander 2016", "C16");
  }
}

module.exports = LightningGreaves;
