"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZodiacDog extends UnimplementedCard {
  constructor (game) {
    super(game, "Zodiac Dog", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacDog;
