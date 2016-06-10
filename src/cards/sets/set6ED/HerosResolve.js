"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HerosResolve extends UnimplementedCard {
  constructor (game) {
    super(game, "Hero's Resolve", "Classic Sixth Edition", "6ED");
  }
}

module.exports = HerosResolve;
