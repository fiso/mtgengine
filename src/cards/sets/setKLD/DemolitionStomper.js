"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DemolitionStomper extends UnimplementedCard {
  constructor (game) {
    super(game, "Demolition Stomper", "Kaladesh", "KLD");
  }
}

module.exports = DemolitionStomper;
