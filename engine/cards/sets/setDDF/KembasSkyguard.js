"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KembasSkyguard extends UnimplementedCard {
  constructor(game) {
    super(game, "Kemba's Skyguard", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = KembasSkyguard;
