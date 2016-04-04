"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArmyAnts extends Card {
  constructor(game) {
    super(game, "Army Ants", "Visions", "VIS");
  }
}

module.exports = ArmyAnts;
