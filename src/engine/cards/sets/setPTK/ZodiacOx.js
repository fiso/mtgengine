"use strict";
const Constants = require ("../../../Constants");
const ZodiacOxBase = require("../setPRM/ZodiacOx");

class ZodiacOx extends ZodiacOxBase {
  constructor (game) {
    super(game, "Zodiac Ox", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacOx;
