"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZodiacPig extends UnimplementedCard {
  constructor (game) {
    super(game, "Zodiac Pig", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacPig;
