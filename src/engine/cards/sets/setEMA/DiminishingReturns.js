"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiminishingReturns extends UnimplementedCard {
  constructor (game) {
    super(game, "Diminishing Returns", "Eternal Masters", "EMA");
  }
}

module.exports = DiminishingReturns;
