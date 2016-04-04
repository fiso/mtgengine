"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LightningGreavesBase = require("../setARC/LightningGreaves.js");

class LightningGreaves extends LightningGreavesBase {
  constructor(game) {
    super(game, "Lightning Greaves", "Mirrodin", "MRD");
  }
}

module.exports = LightningGreaves;
