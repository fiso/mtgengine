"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Entering extends UnimplementedCard {
  constructor(game) {
    super(game, "Entering", "Dragon's Maze", "DGM");
  }
}

module.exports = Entering;
