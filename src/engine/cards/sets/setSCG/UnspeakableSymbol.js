"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnspeakableSymbol extends UnimplementedCard {
  constructor (game) {
    super(game, "Unspeakable Symbol", "Scourge", "SCG");
  }
}

module.exports = UnspeakableSymbol;
