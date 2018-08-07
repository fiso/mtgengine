"use strict";
const Constants = require ("../../../Constants");
const ZodiacGoatBase = require("../setPRM/ZodiacGoat");

class ZodiacGoat extends ZodiacGoatBase {
  constructor (game) {
    super(game, "Zodiac Goat", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacGoat;
