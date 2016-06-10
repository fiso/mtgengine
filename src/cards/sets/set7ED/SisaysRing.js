"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SisaysRing extends UnimplementedCard {
  constructor (game) {
    super(game, "Sisay's Ring", "Seventh Edition", "7ED");
  }
}

module.exports = SisaysRing;
