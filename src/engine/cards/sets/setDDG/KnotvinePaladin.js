"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnotvinePaladin extends UnimplementedCard {
  constructor (game) {
    super(game, "Knotvine Paladin", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = KnotvinePaladin;
