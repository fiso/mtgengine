"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WearTear extends UnimplementedCard {
  constructor (game) {
    super(game, "Wear // Tear", "Dragon's Maze", "DGM");
  }
}

module.exports = WearTear;
