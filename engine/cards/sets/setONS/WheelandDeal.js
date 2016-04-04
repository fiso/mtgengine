"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WheelandDeal extends UnimplementedCard {
  constructor(game) {
    super(game, "Wheel and Deal", "Onslaught", "ONS");
  }
}

module.exports = WheelandDeal;
