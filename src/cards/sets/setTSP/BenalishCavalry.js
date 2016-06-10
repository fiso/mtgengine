"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenalishCavalry extends UnimplementedCard {
  constructor (game) {
    super(game, "Benalish Cavalry", "Time Spiral", "TSP");
  }
}

module.exports = BenalishCavalry;
