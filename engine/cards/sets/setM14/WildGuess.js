"use strict";
const Constants = require ("../../../Constants");
const WildGuessBase = require("../setM13/WildGuess");

class WildGuess extends WildGuessBase {
  constructor(game) {
    super(game, "Wild Guess", "Magic 2014 Core Set", "M14");
  }
}

module.exports = WildGuess;
