"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecklessCharge extends UnimplementedCard {
  constructor (game) {
    super(game, "Reckless Charge", "Odyssey", "ODY");
  }
}

module.exports = RecklessCharge;
