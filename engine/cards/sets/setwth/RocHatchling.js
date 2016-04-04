"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RocHatchling extends UnimplementedCard {
  constructor(game) {
    super(game, "Roc Hatchling", "Weatherlight", "WTH");
  }
}

module.exports = RocHatchling;
