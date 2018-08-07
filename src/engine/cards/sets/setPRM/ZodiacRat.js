"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZodiacRat extends UnimplementedCard {
  constructor (game) {
    super(game, "Zodiac Rat", "Magic Online Promos", "PRM");
  }
}

module.exports = ZodiacRat;
