"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BenalishLancer extends Card {
  constructor(game) {
    super(game, "Benalish Lancer", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = BenalishLancer;
