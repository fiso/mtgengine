"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZodiacRabbit extends UnimplementedCard {
  constructor (game) {
    super(game, "Zodiac Rabbit", "Magic Online Promos", "PRM");
  }
}

module.exports = ZodiacRabbit;
