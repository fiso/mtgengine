"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildGrowth extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild Growth", "Commander 2018", "C18");
  }
}

module.exports = WildGrowth;
