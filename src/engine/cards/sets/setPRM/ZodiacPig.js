"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZodiacPig extends UnimplementedCard {
  constructor (game) {
    super(game, "Zodiac Pig", "Magic Online Promos", "PRM");
  }
}

module.exports = ZodiacPig;
