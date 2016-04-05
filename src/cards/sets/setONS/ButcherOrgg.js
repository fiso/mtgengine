"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ButcherOrgg extends UnimplementedCard {
  constructor(game) {
    super(game, "Butcher Orgg", "Onslaught", "ONS");
  }
}

module.exports = ButcherOrgg;
