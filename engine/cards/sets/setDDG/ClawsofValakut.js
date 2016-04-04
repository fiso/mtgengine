"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ClawsofValakut extends Card {
  constructor(game) {
    super(game, "Claws of Valakut", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = ClawsofValakut;
