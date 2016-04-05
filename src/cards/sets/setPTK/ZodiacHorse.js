"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZodiacHorse extends UnimplementedCard {
  constructor(game) {
    super(game, "Zodiac Horse", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacHorse;
