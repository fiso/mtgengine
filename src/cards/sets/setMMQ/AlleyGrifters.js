"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlleyGrifters extends UnimplementedCard {
  constructor (game) {
    super(game, "Alley Grifters", "Mercadian Masques", "MMQ");
  }
}

module.exports = AlleyGrifters;
