"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bioshift extends UnimplementedCard {
  constructor (game) {
    super(game, "Bioshift", "Gatecrash", "GTC");
  }
}

module.exports = Bioshift;
