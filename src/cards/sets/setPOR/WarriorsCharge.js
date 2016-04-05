"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarriorsCharge extends UnimplementedCard {
  constructor(game) {
    super(game, "Warrior's Charge", "Portal", "POR");
  }
}

module.exports = WarriorsCharge;
