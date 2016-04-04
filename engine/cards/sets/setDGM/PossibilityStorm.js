"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PossibilityStorm extends Card {
  constructor(game) {
    super(game, "Possibility Storm", "Dragon's Maze", "DGM");
  }
}

module.exports = PossibilityStorm;
