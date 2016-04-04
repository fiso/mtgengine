"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZodiacDog extends Card {
  constructor(game) {
    super(game, "Zodiac Dog", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacDog;
