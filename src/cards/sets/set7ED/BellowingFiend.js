"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BellowingFiend extends UnimplementedCard {
  constructor (game) {
    super(game, "Bellowing Fiend", "Seventh Edition", "7ED");
  }
}

module.exports = BellowingFiend;
