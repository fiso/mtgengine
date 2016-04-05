"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlamestickCourier extends UnimplementedCard {
  constructor(game) {
    super(game, "Flamestick Courier", "Onslaught", "ONS");
  }
}

module.exports = FlamestickCourier;
