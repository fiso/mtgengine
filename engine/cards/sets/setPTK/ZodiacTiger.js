"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZodiacTiger extends Card {
  constructor(game) {
    super(game, "Zodiac Tiger", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacTiger;
