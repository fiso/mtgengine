"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildGuess extends UnimplementedCard {
  constructor(game) {
    super(game, "Wild Guess", "Magic 2013", "M13");
  }
}

module.exports = WildGuess;
