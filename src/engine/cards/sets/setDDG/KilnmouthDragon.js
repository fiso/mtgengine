"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KilnmouthDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Kilnmouth Dragon", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = KilnmouthDragon;
