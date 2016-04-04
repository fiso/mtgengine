"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KorSpiritdancerBase = require("../setPC2/KorSpiritdancer.js");

class KorSpiritdancer extends KorSpiritdancerBase {
  constructor(game) {
    super(game, "Kor Spiritdancer", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = KorSpiritdancer;
