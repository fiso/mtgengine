"use strict";
const Constants = require ("../../../Constants");
const OrimSamiteHealerBase = require("../setTPR/OrimSamiteHealer");

class OrimSamiteHealer extends OrimSamiteHealerBase {
  constructor (game) {
    super(game, "Orim, Samite Healer", "Tempest", "TMP");
  }
}

module.exports = OrimSamiteHealer;
