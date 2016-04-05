"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritLink extends UnimplementedCard {
  constructor(game) {
    super(game, "Spirit Link", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SpiritLink;
