"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WindStrider extends UnimplementedCard {
  constructor (game) {
    super(game, "Wind Strider", "Ixalan", "XLN");
  }
}

module.exports = WindStrider;
