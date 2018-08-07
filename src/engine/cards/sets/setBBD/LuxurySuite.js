"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LuxurySuite extends UnimplementedCard {
  constructor (game) {
    super(game, "Luxury Suite", "Battlebond", "BBD");
  }
}

module.exports = LuxurySuite;
