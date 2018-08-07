"use strict";
const Constants = require ("../../../Constants");
const ZodiacTigerBase = require("../setPRM/ZodiacTiger");

class ZodiacTiger extends ZodiacTigerBase {
  constructor (game) {
    super(game, "Zodiac Tiger", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacTiger;
