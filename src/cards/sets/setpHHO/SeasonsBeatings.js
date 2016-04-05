"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeasonsBeatings extends UnimplementedCard {
  constructor(game) {
    super(game, "Season's Beatings", "Happy Holidays", "pHHO");
  }
}

module.exports = SeasonsBeatings;
