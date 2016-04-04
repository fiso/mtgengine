"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZodiacSnake extends Card {
  constructor(game) {
    super(game, "Zodiac Snake", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacSnake;
