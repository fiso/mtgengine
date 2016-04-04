"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CarrierThrall extends Card {
  constructor(game) {
    super(game, "Carrier Thrall", "Battle for Zendikar", "BFZ");
  }
}

module.exports = CarrierThrall;
