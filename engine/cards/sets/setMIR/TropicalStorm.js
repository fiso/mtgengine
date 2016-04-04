"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TropicalStorm extends UnimplementedCard {
  constructor(game) {
    super(game, "Tropical Storm", "Mirage", "MIR");
  }
}

module.exports = TropicalStorm;
