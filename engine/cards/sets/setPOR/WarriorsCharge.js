"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarriorsCharge extends Card {
  constructor(game) {
    super(game, "Warrior's Charge", "Portal", "POR");
  }
}

module.exports = WarriorsCharge;
