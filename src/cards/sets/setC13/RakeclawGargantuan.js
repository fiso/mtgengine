"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RakeclawGargantuan extends UnimplementedCard {
  constructor (game) {
    super(game, "Rakeclaw Gargantuan", "Commander 2013 Edition", "C13");
  }
}

module.exports = RakeclawGargantuan;
