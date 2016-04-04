"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LetterBomb extends Card {
  constructor(game) {
    super(game, "Letter Bomb", "Unhinged", "UNH");
  }
}

module.exports = LetterBomb;
