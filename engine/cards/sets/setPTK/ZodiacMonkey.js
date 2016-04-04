"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ZodiacMonkeyBase = require("../set9ED/ZodiacMonkey.js");

class ZodiacMonkey extends ZodiacMonkeyBase {
  constructor(game) {
    super(game, "Zodiac Monkey", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacMonkey;
