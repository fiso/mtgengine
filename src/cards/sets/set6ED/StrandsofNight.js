"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrandsofNight extends UnimplementedCard {
  constructor (game) {
    super(game, "Strands of Night", "Classic Sixth Edition", "6ED");
  }
}

module.exports = StrandsofNight;
