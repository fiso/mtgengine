"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZodiacRooster extends Card {
  constructor(game) {
    super(game, "Zodiac Rooster", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacRooster;
