"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinGaveleer extends Card {
  constructor(game) {
    super(game, "Goblin Gaveleer", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GoblinGaveleer;
