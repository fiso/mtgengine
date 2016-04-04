"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SelvalasCharge extends Card {
  constructor(game) {
    super(game, "Selvala's Charge", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SelvalasCharge;
