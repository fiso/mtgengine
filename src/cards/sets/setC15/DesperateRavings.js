"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesperateRavings extends UnimplementedCard {
  constructor(game) {
    super(game, "Desperate Ravings", "Commander 2015", "C15");
  }
}

module.exports = DesperateRavings;
