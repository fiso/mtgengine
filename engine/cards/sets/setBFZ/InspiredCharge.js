"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InspiredCharge extends Card {
  constructor(game) {
    super(game, "Inspired Charge", "Battle for Zendikar", "BFZ");
  }
}

module.exports = InspiredCharge;
