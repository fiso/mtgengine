"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wear extends UnimplementedCard {
  constructor (game) {
    super(game, "Wear", "Dragon's Maze", "DGM");
  }
}

module.exports = Wear;
