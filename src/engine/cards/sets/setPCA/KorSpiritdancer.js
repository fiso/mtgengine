"use strict";
const Constants = require ("../../../Constants");
const KorSpiritdancerBase = require("../setBBD/KorSpiritdancer");

class KorSpiritdancer extends KorSpiritdancerBase {
  constructor (game) {
    super(game, "Kor Spiritdancer", "Planechase Anthology", "PCA");
  }
}

module.exports = KorSpiritdancer;
