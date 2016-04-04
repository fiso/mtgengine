"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlizzardElemental extends Card {
  constructor(game) {
    super(game, "Blizzard Elemental", "Beatdown Box Set", "BTD");
  }
}

module.exports = BlizzardElemental;
