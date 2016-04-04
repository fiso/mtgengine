"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WoodvineElemental extends Card {
  constructor(game) {
    super(game, "Woodvine Elemental", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = WoodvineElemental;
