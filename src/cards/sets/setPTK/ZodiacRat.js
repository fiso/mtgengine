"use strict";
const Constants = require ("../../../Constants");
const ZodiacRatBase = require("../setPRM/ZodiacRat");

class ZodiacRat extends ZodiacRatBase {
  constructor (game) {
    super(game, "Zodiac Rat", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacRat;
