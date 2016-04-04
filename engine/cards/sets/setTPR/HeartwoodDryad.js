"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HeartwoodDryadBase = require("../setTMP/HeartwoodDryad.js");

class HeartwoodDryad extends HeartwoodDryadBase {
  constructor(game) {
    super(game, "Heartwood Dryad", "Tempest Remastered", "TPR");
  }
}

module.exports = HeartwoodDryad;
