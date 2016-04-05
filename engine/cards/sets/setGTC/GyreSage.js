"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GyreSage extends UnimplementedCard {
  constructor(game) {
    super(game, "Gyre Sage", "Gatecrash", "GTC");
  }
}

module.exports = GyreSage;
