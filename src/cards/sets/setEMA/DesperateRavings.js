"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesperateRavings extends UnimplementedCard {
  constructor (game) {
    super(game, "Desperate Ravings", "Eternal Masters", "EMA");
  }
}

module.exports = DesperateRavings;
