"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeoninSkyhunter extends UnimplementedCard {
  constructor(game) {
    super(game, "Leonin Skyhunter", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = LeoninSkyhunter;
