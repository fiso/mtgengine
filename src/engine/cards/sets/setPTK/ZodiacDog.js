"use strict";
const Constants = require ("../../../Constants");
const ZodiacDogBase = require("../setPRM/ZodiacDog");

class ZodiacDog extends ZodiacDogBase {
  constructor (game) {
    super(game, "Zodiac Dog", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZodiacDog;
