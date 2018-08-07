"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FairgroundsWarden extends UnimplementedCard {
  constructor (game) {
    super(game, "Fairgrounds Warden", "Kaladesh", "KLD");
  }
}

module.exports = FairgroundsWarden;
