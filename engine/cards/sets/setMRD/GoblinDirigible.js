"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinDirigible extends Card {
  constructor(game) {
    super(game, "Goblin Dirigible", "Mirrodin", "MRD");
  }
}

module.exports = GoblinDirigible;
