"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Burn extends UnimplementedCard {
  constructor(game) {
    super(game, "Burn", "Dragon's Maze", "DGM");
  }
}

module.exports = Burn;
