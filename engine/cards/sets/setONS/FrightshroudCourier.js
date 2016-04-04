"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrightshroudCourier extends UnimplementedCard {
  constructor(game) {
    super(game, "Frightshroud Courier", "Onslaught", "ONS");
  }
}

module.exports = FrightshroudCourier;
