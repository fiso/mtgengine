"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZodiacTiger extends UnimplementedCard {
  constructor(game) {
    super(game, "Zodiac Tiger", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacTiger;
