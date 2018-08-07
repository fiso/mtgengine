"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WitheredWretch extends UnimplementedCard {
  constructor (game) {
    super(game, "Withered Wretch", "Planechase", "HOP");
  }
}

module.exports = WitheredWretch;
