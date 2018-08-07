"use strict";
const Constants = require ("../../../Constants");
const ZodiacHorseBase = require("../setPRM/ZodiacHorse");

class ZodiacHorse extends ZodiacHorseBase {
  constructor (game) {
    super(game, "Zodiac Horse", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacHorse;
