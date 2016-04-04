"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThunderDragon extends UnimplementedCard {
  constructor(game) {
    super(game, "Thunder Dragon", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = ThunderDragon;
