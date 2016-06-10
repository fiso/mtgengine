"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UndergroundRiver extends UnimplementedCard {
  constructor (game) {
    super(game, "Underground River", "Classic Sixth Edition", "6ED");
  }
}

module.exports = UndergroundRiver;
