"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PossibilityStorm extends UnimplementedCard {
  constructor(game) {
    super(game, "Possibility Storm", "Dragon's Maze", "DGM");
  }
}

module.exports = PossibilityStorm;
