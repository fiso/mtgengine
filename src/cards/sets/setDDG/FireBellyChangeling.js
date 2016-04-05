"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireBellyChangeling extends UnimplementedCard {
  constructor(game) {
    super(game, "Fire-Belly Changeling", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = FireBellyChangeling;
