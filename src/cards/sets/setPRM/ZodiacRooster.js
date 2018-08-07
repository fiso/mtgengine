"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZodiacRooster extends UnimplementedCard {
  constructor (game) {
    super(game, "Zodiac Rooster", "Magic Online Promos", "PRM");
  }
}

module.exports = ZodiacRooster;
