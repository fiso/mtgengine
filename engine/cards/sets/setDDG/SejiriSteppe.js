"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SejiriSteppe extends Card {
  constructor(game) {
    super(game, "Sejiri Steppe", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = SejiriSteppe;
