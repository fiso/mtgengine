"use strict";
const Constants = require ("../../../Constants");
const ZodiacRabbitBase = require("../setPRM/ZodiacRabbit");

class ZodiacRabbit extends ZodiacRabbitBase {
  constructor (game) {
    super(game, "Zodiac Rabbit", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacRabbit;
