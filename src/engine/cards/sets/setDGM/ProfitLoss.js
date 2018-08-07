"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProfitLoss extends UnimplementedCard {
  constructor (game) {
    super(game, "Profit // Loss", "Dragon's Maze", "DGM");
  }
}

module.exports = ProfitLoss;
