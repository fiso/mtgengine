"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinTestPilot extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Test Pilot", "Dragon's Maze", "DGM");
  }
}

module.exports = GoblinTestPilot;
