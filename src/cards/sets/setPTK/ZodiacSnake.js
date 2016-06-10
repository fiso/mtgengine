"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZodiacSnake extends UnimplementedCard {
  constructor (game) {
    super(game, "Zodiac Snake", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacSnake;
