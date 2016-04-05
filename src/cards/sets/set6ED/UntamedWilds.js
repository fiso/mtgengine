"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UntamedWilds extends UnimplementedCard {
  constructor(game) {
    super(game, "Untamed Wilds", "Classic Sixth Edition", "6ED");
  }
}

module.exports = UntamedWilds;
