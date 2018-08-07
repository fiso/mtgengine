"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hangman extends UnimplementedCard {
  constructor (game) {
    super(game, "Hangman", "Unstable", "UST");
  }
}

module.exports = Hangman;
