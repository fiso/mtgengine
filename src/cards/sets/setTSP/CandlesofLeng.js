"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CandlesofLeng extends UnimplementedCard {
  constructor(game) {
    super(game, "Candles of Leng", "Time Spiral", "TSP");
  }
}

module.exports = CandlesofLeng;
