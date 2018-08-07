"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZodiacGoat extends UnimplementedCard {
  constructor (game) {
    super(game, "Zodiac Goat", "Magic Online Promos", "PRM");
  }
}

module.exports = ZodiacGoat;
