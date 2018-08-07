"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZodiacDog extends UnimplementedCard {
  constructor (game) {
    super(game, "Zodiac Dog", "Magic Online Promos", "PRM");
  }
}

module.exports = ZodiacDog;
