"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HengeGuardian extends Card {
  constructor(game) {
    super(game, "Henge Guardian", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = HengeGuardian;
