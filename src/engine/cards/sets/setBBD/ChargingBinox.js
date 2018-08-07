"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChargingBinox extends UnimplementedCard {
  constructor (game) {
    super(game, "Charging Binox", "Battlebond", "BBD");
  }
}

module.exports = ChargingBinox;
