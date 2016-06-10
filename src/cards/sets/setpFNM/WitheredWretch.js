"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WitheredWretch extends UnimplementedCard {
  constructor (game) {
    super(game, "Withered Wretch", "Friday Night Magic", "pFNM");
  }
}

module.exports = WitheredWretch;
