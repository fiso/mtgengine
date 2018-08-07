"use strict";
const Constants = require ("../../../Constants");
const LightningGreavesBase = require("../setCM2/LightningGreaves");

class LightningGreaves extends LightningGreavesBase {
  constructor (game) {
    super(game, "Lightning Greaves", "Commander 2011", "CMD");
  }
}

module.exports = LightningGreaves;
