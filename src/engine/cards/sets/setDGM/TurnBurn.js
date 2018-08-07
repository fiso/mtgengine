"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TurnBurn extends UnimplementedCard {
  constructor (game) {
    super(game, "Turn // Burn", "Dragon's Maze", "DGM");
  }
}

module.exports = TurnBurn;
