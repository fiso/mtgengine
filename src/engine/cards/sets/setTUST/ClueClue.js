"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClueClue extends UnimplementedCard {
  constructor (game) {
    super(game, "Clue // Clue", "Unstable Tokens", "TUST");
  }
}

module.exports = ClueClue;
