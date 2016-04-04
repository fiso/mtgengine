"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SecondGuess extends Card {
  constructor(game) {
    super(game, "Second Guess", "Avacyn Restored", "AVR");
  }
}

module.exports = SecondGuess;
