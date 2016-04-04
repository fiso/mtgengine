"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZodiacRat extends Card {
  constructor(game) {
    super(game, "Zodiac Rat", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacRat;
