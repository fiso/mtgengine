"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SelvalasCharge extends UnimplementedCard {
  constructor (game) {
    super(game, "Selvala's Charge", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SelvalasCharge;
