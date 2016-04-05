"use strict";
const Constants = require ("../../../Constants");
const LightningGreavesBase = require("../setARC/LightningGreaves");

class LightningGreaves extends LightningGreavesBase {
  constructor(game) {
    super(game, "Lightning Greaves", "Friday Night Magic", "pFNM");
  }
}

module.exports = LightningGreaves;
