"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrimSamiteHealerBase = require("../setTMP/OrimSamiteHealer.js");

class OrimSamiteHealer extends OrimSamiteHealerBase {
  constructor(game) {
    super(game, "Orim, Samite Healer", "Tempest Remastered", "TPR");
  }
}

module.exports = OrimSamiteHealer;
