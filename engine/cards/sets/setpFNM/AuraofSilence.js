"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AuraofSilenceBase = require("../setC15/AuraofSilence.js");

class AuraofSilence extends AuraofSilenceBase {
  constructor(game) {
    super(game, "Aura of Silence", "Friday Night Magic", "pFNM");
  }
}

module.exports = AuraofSilence;
