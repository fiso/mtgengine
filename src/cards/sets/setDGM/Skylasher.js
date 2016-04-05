"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Skylasher extends UnimplementedCard {
  constructor(game) {
    super(game, "Skylasher", "Dragon's Maze", "DGM");
  }
}

module.exports = Skylasher;
