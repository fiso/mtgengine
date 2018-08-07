"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RaptorHatchling extends UnimplementedCard {
  constructor (game) {
    super(game, "Raptor Hatchling", "Ixalan", "XLN");
  }
}

module.exports = RaptorHatchling;
