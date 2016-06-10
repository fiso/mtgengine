"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SecondGuess extends UnimplementedCard {
  constructor (game) {
    super(game, "Second Guess", "Avacyn Restored", "AVR");
  }
}

module.exports = SecondGuess;
