"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinGame extends Card {
  constructor(game) {
    super(game, "Goblin Game", "Planeshift", "PLS");
  }
}

module.exports = GoblinGame;
