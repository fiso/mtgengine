"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Clockspinning extends UnimplementedCard {
  constructor (game) {
    super(game, "Clockspinning", "Time Spiral", "TSP");
  }
}

module.exports = Clockspinning;
