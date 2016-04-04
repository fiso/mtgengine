"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LetterBomb extends UnimplementedCard {
  constructor(game) {
    super(game, "Letter Bomb", "Unhinged", "UNH");
  }
}

module.exports = LetterBomb;
