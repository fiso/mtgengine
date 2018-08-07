"use strict";
const Constants = require ("../../../Constants");
const ZodiacPigBase = require("../setPRM/ZodiacPig");

class ZodiacPig extends ZodiacPigBase {
  constructor (game) {
    super(game, "Zodiac Pig", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacPig;
