"use strict";
const Constants = require ("../../../Constants");
const ZodiacSnakeBase = require("../setPRM/ZodiacSnake");

class ZodiacSnake extends ZodiacSnakeBase {
  constructor (game) {
    super(game, "Zodiac Snake", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacSnake;
