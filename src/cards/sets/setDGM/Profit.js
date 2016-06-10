"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Profit extends UnimplementedCard {
  constructor (game) {
    super(game, "Profit", "Dragon's Maze", "DGM");
  }
}

module.exports = Profit;
