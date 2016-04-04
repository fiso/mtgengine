"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WildGuessBase = require("../setM13/WildGuess.js");

class WildGuess extends WildGuessBase {
  constructor(game) {
    super(game, "Wild Guess", "Magic 2014 Core Set", "M14");
  }
}

module.exports = WildGuess;
