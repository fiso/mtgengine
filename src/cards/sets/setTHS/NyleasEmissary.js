"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NyleasEmissary extends UnimplementedCard {
  constructor (game) {
    super(game, "Nylea's Emissary", "Theros", "THS");
  }
}

module.exports = NyleasEmissary;
