"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HerosResolve extends UnimplementedCard {
  constructor (game) {
    super(game, "Hero's Resolve", "Starter 2000", "S00");
  }
}

module.exports = HerosResolve;
