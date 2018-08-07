"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarrionCrow extends UnimplementedCard {
  constructor (game) {
    super(game, "Carrion Crow", "Magic 2015", "M15");
  }
}

module.exports = CarrionCrow;
