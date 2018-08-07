"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VigorousCharge extends UnimplementedCard {
  constructor (game) {
    super(game, "Vigorous Charge", "Invasion", "INV");
  }
}

module.exports = VigorousCharge;
