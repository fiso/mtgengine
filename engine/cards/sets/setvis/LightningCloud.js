"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LightningCloud extends Card {
  constructor(game) {
    super(game, "Lightning Cloud", "Visions", "VIS");
  }
}

module.exports = LightningCloud;
