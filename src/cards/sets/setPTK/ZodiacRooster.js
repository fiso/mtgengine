"use strict";
const Constants = require ("../../../Constants");
const ZodiacRoosterBase = require("../setPRM/ZodiacRooster");

class ZodiacRooster extends ZodiacRoosterBase {
  constructor (game) {
    super(game, "Zodiac Rooster", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacRooster;
