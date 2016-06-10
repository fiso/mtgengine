"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarrierThrall extends UnimplementedCard {
  constructor (game) {
    super(game, "Carrier Thrall", "Battle for Zendikar", "BFZ");
  }
}

module.exports = CarrierThrall;
