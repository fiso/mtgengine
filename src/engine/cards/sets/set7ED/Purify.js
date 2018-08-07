"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Purify extends UnimplementedCard {
  constructor (game) {
    super(game, "Purify", "Seventh Edition", "7ED");
  }
}

module.exports = Purify;
