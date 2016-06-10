"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesperateCharge extends UnimplementedCard {
  constructor (game) {
    super(game, "Desperate Charge", "Masters Edition III", "ME3");
  }
}

module.exports = DesperateCharge;
