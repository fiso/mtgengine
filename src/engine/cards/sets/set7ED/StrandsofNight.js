"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrandsofNight extends UnimplementedCard {
  constructor (game) {
    super(game, "Strands of Night", "Seventh Edition", "7ED");
  }
}

module.exports = StrandsofNight;
