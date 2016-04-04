"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LightningBerserker extends Card {
  constructor(game) {
    super(game, "Lightning Berserker", "Dragons of Tarkir", "DTK");
  }
}

module.exports = LightningBerserker;
