"use strict";
const Constants = require ("../../../Constants");
const LightningAxeBase = require("../setSOI/LightningAxe");

class LightningAxe extends LightningAxeBase {
  constructor(game) {
    super(game, "Lightning Axe", "Time Spiral", "TSP");
  }
}

module.exports = LightningAxe;
