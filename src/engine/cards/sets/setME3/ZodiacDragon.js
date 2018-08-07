"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZodiacDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Zodiac Dragon", "Masters Edition III", "ME3");
  }
}

module.exports = ZodiacDragon;
