"use strict";
const Constants = require ("../../../Constants");
const ZodiacDragonBase = require("../setME3/ZodiacDragon");

class ZodiacDragon extends ZodiacDragonBase {
  constructor (game) {
    super(game, "Zodiac Dragon", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacDragon;
