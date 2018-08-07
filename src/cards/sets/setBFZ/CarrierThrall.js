"use strict";
const Constants = require ("../../../Constants");
const CarrierThrallBase = require("../setDDR/CarrierThrall");

class CarrierThrall extends CarrierThrallBase {
  constructor (game) {
    super(game, "Carrier Thrall", "Battle for Zendikar", "BFZ");
  }
}

module.exports = CarrierThrall;
