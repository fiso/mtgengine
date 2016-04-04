"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JawsofStone extends Card {
  constructor(game) {
    super(game, "Jaws of Stone", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = JawsofStone;
