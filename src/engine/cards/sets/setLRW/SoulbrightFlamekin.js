"use strict";
const Constants = require ("../../../Constants");
const SoulbrightFlamekinBase = require("../setA25/SoulbrightFlamekin");

class SoulbrightFlamekin extends SoulbrightFlamekinBase {
  constructor (game) {
    super(game, "Soulbright Flamekin", "Lorwyn", "LRW");
  }
}

module.exports = SoulbrightFlamekin;
