"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarrionCrow extends UnimplementedCard {
  constructor(game) {
    super(game, "Carrion Crow", "Magic 2015 Core Set", "M15");
  }
}

module.exports = CarrionCrow;
