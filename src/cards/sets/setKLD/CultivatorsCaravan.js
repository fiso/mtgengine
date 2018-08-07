"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CultivatorsCaravan extends UnimplementedCard {
  constructor (game) {
    super(game, "Cultivator's Caravan", "Kaladesh", "KLD");
  }
}

module.exports = CultivatorsCaravan;
