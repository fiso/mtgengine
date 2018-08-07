"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ValorousCharge extends UnimplementedCard {
  constructor (game) {
    super(game, "Valorous Charge", "Portal", "POR");
  }
}

module.exports = ValorousCharge;
