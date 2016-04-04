"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpoilsofVictory extends UnimplementedCard {
  constructor(game) {
    super(game, "Spoils of Victory", "Commander 2013 Edition", "C13");
  }
}

module.exports = SpoilsofVictory;
