"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoulbrightFlamekinBase = require("../setDD3_JVC/SoulbrightFlamekin.js");

class SoulbrightFlamekin extends SoulbrightFlamekinBase {
  constructor(game) {
    super(game, "Soulbright Flamekin", "Lorwyn", "LRW");
  }
}

module.exports = SoulbrightFlamekin;
