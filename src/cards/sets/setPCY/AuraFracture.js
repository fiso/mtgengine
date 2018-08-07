"use strict";
const Constants = require ("../../../Constants");
const AuraFractureBase = require("../setWC00/AuraFracture");

class AuraFracture extends AuraFractureBase {
  constructor (game) {
    super(game, "Aura Fracture", "Prophecy", "PCY");
  }
}

module.exports = AuraFracture;
