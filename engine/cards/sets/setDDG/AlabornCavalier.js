"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlabornCavalier extends Card {
  constructor(game) {
    super(game, "Alaborn Cavalier", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = AlabornCavalier;
