"use strict";
const Constants = require ("../../../Constants");
const ArcaneAdaptationBase = require("../setXLN/ArcaneAdaptation");

class ArcaneAdaptation extends ArcaneAdaptationBase {
  constructor (game) {
    super(game, "Arcane Adaptation", "Ixalan Promos", "PXLN");
  }
}

module.exports = ArcaneAdaptation;
