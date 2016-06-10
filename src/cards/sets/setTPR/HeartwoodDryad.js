"use strict";
const Constants = require ("../../../Constants");
const HeartwoodDryadBase = require("../setTMP/HeartwoodDryad");

class HeartwoodDryad extends HeartwoodDryadBase {
  constructor (game) {
    super(game, "Heartwood Dryad", "Tempest Remastered", "TPR");
  }
}

module.exports = HeartwoodDryad;
