"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FairgroundsTrumpeter extends UnimplementedCard {
  constructor (game) {
    super(game, "Fairgrounds Trumpeter", "Kaladesh", "KLD");
  }
}

module.exports = FairgroundsTrumpeter;
