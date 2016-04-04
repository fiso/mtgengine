"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZodiacPig extends Card {
  constructor(game) {
    super(game, "Zodiac Pig", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacPig;
