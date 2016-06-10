"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VerdantHaven extends UnimplementedCard {
  constructor (game) {
    super(game, "Verdant Haven", "Gatecrash", "GTC");
  }
}

module.exports = VerdantHaven;
