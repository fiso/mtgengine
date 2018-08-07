"use strict";
const Constants = require ("../../../Constants");
const KorSpiritdancerBase = require("../setBBD/KorSpiritdancer");

class KorSpiritdancer extends KorSpiritdancerBase {
  constructor (game) {
    super(game, "Kor Spiritdancer", "Planechase 2012", "PC2");
  }
}

module.exports = KorSpiritdancer;
