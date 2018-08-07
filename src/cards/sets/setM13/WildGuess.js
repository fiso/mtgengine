"use strict";
const Constants = require ("../../../Constants");
const WildGuessBase = require("../setM14/WildGuess");

class WildGuess extends WildGuessBase {
  constructor (game) {
    super(game, "Wild Guess", "Magic 2013", "M13");
  }
}

module.exports = WildGuess;
