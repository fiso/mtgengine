"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HolyMantle extends UnimplementedCard {
  constructor (game) {
    super(game, "Holy Mantle", "Gatecrash", "GTC");
  }
}

module.exports = HolyMantle;
