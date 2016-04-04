"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SavageLands extends Card {
  constructor(game) {
    super(game, "Savage Lands", "Commander 2013 Edition", "C13");
  }
}

module.exports = SavageLands;
