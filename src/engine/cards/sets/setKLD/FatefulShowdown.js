"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FatefulShowdown extends UnimplementedCard {
  constructor (game) {
    super(game, "Fateful Showdown", "Kaladesh", "KLD");
  }
}

module.exports = FatefulShowdown;
