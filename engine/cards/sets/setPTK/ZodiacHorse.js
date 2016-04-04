"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZodiacHorse extends Card {
  constructor(game) {
    super(game, "Zodiac Horse", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacHorse;
