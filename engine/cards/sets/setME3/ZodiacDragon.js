"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZodiacDragon extends Card {
  constructor(game) {
    super(game, "Zodiac Dragon", "Masters Edition III", "ME3");
  }
}

module.exports = ZodiacDragon;
