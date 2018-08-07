"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WindborneCharge extends UnimplementedCard {
  constructor (game) {
    super(game, "Windborne Charge", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = WindborneCharge;
