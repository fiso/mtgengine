"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Geistflame extends UnimplementedCard {
  constructor (game) {
    super(game, "Geistflame", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = Geistflame;
