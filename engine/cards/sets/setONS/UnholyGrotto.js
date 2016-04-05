"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnholyGrotto extends UnimplementedCard {
  constructor(game) {
    super(game, "Unholy Grotto", "Onslaught", "ONS");
  }
}

module.exports = UnholyGrotto;
