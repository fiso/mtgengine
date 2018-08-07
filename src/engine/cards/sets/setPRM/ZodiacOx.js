"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZodiacOx extends UnimplementedCard {
  constructor (game) {
    super(game, "Zodiac Ox", "Magic Online Promos", "PRM");
  }
}

module.exports = ZodiacOx;
