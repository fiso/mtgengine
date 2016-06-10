"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinGame extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Game", "Planeshift", "PLS");
  }
}

module.exports = GoblinGame;
