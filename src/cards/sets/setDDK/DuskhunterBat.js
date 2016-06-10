"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DuskhunterBat extends UnimplementedCard {
  constructor (game) {
    super(game, "Duskhunter Bat", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = DuskhunterBat;
