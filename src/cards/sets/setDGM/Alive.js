"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Alive extends UnimplementedCard {
  constructor (game) {
    super(game, "Alive", "Dragon's Maze", "DGM");
  }
}

module.exports = Alive;
