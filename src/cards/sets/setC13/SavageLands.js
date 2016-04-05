"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SavageLands extends UnimplementedCard {
  constructor(game) {
    super(game, "Savage Lands", "Commander 2013 Edition", "C13");
  }
}

module.exports = SavageLands;
