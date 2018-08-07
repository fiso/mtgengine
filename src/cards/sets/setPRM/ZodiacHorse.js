"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZodiacHorse extends UnimplementedCard {
  constructor (game) {
    super(game, "Zodiac Horse", "Magic Online Promos", "PRM");
  }
}

module.exports = ZodiacHorse;
