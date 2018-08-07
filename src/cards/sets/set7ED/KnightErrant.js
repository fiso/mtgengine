"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightErrant extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight Errant", "Seventh Edition", "7ED");
  }
}

module.exports = KnightErrant;
