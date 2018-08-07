"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritLink extends UnimplementedCard {
  constructor (game) {
    super(game, "Spirit Link", "Tenth Edition", "10E");
  }
}

module.exports = SpiritLink;
