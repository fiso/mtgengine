"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SilverKnight extends Card {
  constructor(game) {
    super(game, "Silver Knight", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = SilverKnight;
