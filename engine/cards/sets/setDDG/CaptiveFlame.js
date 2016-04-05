"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CaptiveFlame extends UnimplementedCard {
  constructor(game) {
    super(game, "Captive Flame", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = CaptiveFlame;
