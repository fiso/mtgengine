"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZodiacTiger extends UnimplementedCard {
  constructor (game) {
    super(game, "Zodiac Tiger", "Magic Online Promos", "PRM");
  }
}

module.exports = ZodiacTiger;
