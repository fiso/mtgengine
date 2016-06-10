"use strict";
const Constants = require ("../../../Constants");
const OrimSamiteHealerBase = require("../setTMP/OrimSamiteHealer");

class OrimSamiteHealer extends OrimSamiteHealerBase {
  constructor (game) {
    super(game, "Orim, Samite Healer", "Tempest Remastered", "TPR");
  }
}

module.exports = OrimSamiteHealer;
