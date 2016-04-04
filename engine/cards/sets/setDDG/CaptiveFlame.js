"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CaptiveFlame extends Card {
  constructor(game) {
    super(game, "Captive Flame", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = CaptiveFlame;
