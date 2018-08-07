"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GameofChaos extends UnimplementedCard {
  constructor (game) {
    super(game, "Game of Chaos", "You Make the Cube", "PZ2");
  }
}

module.exports = GameofChaos;
