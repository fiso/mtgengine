"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UntamedWilds extends UnimplementedCard {
  constructor (game) {
    super(game, "Untamed Wilds", "Seventh Edition", "7ED");
  }
}

module.exports = UntamedWilds;
