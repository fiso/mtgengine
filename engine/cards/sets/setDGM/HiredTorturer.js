"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HiredTorturer extends UnimplementedCard {
  constructor(game) {
    super(game, "Hired Torturer", "Dragon's Maze", "DGM");
  }
}

module.exports = HiredTorturer;
