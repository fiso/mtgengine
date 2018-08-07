"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChargingBandits extends UnimplementedCard {
  constructor (game) {
    super(game, "Charging Bandits", "Portal", "POR");
  }
}

module.exports = ChargingBandits;
