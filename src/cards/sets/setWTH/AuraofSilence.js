"use strict";
const Constants = require ("../../../Constants");
const AuraofSilenceBase = require("../setC15/AuraofSilence");

class AuraofSilence extends AuraofSilenceBase {
  constructor(game) {
    super(game, "Aura of Silence", "Weatherlight", "WTH");
  }
}

module.exports = AuraofSilence;
