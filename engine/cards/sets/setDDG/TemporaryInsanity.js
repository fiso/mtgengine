"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TemporaryInsanity extends Card {
  constructor(game) {
    super(game, "Temporary Insanity", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = TemporaryInsanity;
