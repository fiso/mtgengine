"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HermitDruid extends UnimplementedCard {
  constructor(game) {
    super(game, "Hermit Druid", "Judge Gift Program", "pJGP");
  }
}

module.exports = HermitDruid;
