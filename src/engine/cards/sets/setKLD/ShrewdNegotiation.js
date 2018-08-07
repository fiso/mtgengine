"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShrewdNegotiation extends UnimplementedCard {
  constructor (game) {
    super(game, "Shrewd Negotiation", "Kaladesh", "KLD");
  }
}

module.exports = ShrewdNegotiation;
