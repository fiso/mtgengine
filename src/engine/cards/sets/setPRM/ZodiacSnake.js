"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZodiacSnake extends UnimplementedCard {
  constructor (game) {
    super(game, "Zodiac Snake", "Magic Online Promos", "PRM");
  }
}

module.exports = ZodiacSnake;
