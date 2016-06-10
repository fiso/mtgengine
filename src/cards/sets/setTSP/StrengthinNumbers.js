"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrengthinNumbers extends UnimplementedCard {
  constructor (game) {
    super(game, "Strength in Numbers", "Time Spiral", "TSP");
  }
}

module.exports = StrengthinNumbers;
