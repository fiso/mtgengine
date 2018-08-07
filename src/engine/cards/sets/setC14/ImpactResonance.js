"use strict";
const Constants = require ("../../../Constants");
const ImpactResonanceBase = require("../setCM2/ImpactResonance");

class ImpactResonance extends ImpactResonanceBase {
  constructor (game) {
    super(game, "Impact Resonance", "Commander 2014", "C14");
  }
}

module.exports = ImpactResonance;
