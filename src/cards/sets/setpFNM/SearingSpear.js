"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SearingSpear extends UnimplementedCard {
  constructor (game) {
    super(game, "Searing Spear", "Friday Night Magic", "pFNM");
  }
}

module.exports = SearingSpear;
