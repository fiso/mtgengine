"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinGuide extends Card {
  constructor(game) {
    super(game, "Goblin Guide", "Grand Prix", "pGPX");
  }
}

module.exports = GoblinGuide;
