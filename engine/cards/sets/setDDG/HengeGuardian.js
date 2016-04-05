"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HengeGuardian extends UnimplementedCard {
  constructor(game) {
    super(game, "Henge Guardian", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = HengeGuardian;
