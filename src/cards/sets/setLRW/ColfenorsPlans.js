"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ColfenorsPlans extends UnimplementedCard {
  constructor (game) {
    super(game, "Colfenor's Plans", "Lorwyn", "LRW");
  }
}

module.exports = ColfenorsPlans;
