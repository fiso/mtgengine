"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZodiacRat extends UnimplementedCard {
  constructor(game) {
    super(game, "Zodiac Rat", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacRat;
