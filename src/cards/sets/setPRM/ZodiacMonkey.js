"use strict";
const Constants = require ("../../../Constants");
const ZodiacMonkeyBase = require("../set9ED/ZodiacMonkey");

class ZodiacMonkey extends ZodiacMonkeyBase {
  constructor (game) {
    super(game, "Zodiac Monkey", "Magic Online Promos", "PRM");
  }
}

module.exports = ZodiacMonkey;
