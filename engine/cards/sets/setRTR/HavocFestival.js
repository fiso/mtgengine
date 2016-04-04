"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HavocFestival extends UnimplementedCard {
  constructor(game) {
    super(game, "Havoc Festival", "Return to Ravnica", "RTR");
  }
}

module.exports = HavocFestival;
