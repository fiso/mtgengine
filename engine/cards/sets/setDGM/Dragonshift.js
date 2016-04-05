"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dragonshift extends UnimplementedCard {
  constructor(game) {
    super(game, "Dragonshift", "Dragon's Maze", "DGM");
  }
}

module.exports = Dragonshift;
