"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CandlesofLeng extends Card {
  constructor(game) {
    super(game, "Candles of Leng", "Time Spiral", "TSP");
  }
}

module.exports = CandlesofLeng;
