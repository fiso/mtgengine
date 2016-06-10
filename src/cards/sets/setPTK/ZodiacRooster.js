"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZodiacRooster extends UnimplementedCard {
  constructor (game) {
    super(game, "Zodiac Rooster", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacRooster;
