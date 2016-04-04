"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HardenedBerserker extends Card {
  constructor(game) {
    super(game, "Hardened Berserker", "Dragons of Tarkir", "DTK");
  }
}

module.exports = HardenedBerserker;
