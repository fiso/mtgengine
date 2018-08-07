"use strict";
const Constants = require ("../../../Constants");
const KorSpiritdancerBase = require("../setBBD/KorSpiritdancer");

class KorSpiritdancer extends KorSpiritdancerBase {
  constructor (game) {
    super(game, "Kor Spiritdancer", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = KorSpiritdancer;
