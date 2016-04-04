"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LightningAxeBase = require("../setSOI/LightningAxe.js");

class LightningAxe extends LightningAxeBase {
  constructor(game) {
    super(game, "Lightning Axe", "Time Spiral", "TSP");
  }
}

module.exports = LightningAxe;
