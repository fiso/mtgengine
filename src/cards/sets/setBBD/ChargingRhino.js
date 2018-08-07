"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChargingRhino extends UnimplementedCard {
  constructor (game) {
    super(game, "Charging Rhino", "Battlebond", "BBD");
  }
}

module.exports = ChargingRhino;
