"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinTestPilot extends Card {
  constructor(game) {
    super(game, "Goblin Test Pilot", "Dragon's Maze", "DGM");
  }
}

module.exports = GoblinTestPilot;
