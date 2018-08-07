"use strict";
const Constants = require ("../../../Constants");
const HeartwoodDryadBase = require("../setTPR/HeartwoodDryad");

class HeartwoodDryad extends HeartwoodDryadBase {
  constructor (game) {
    super(game, "Heartwood Dryad", "Tempest", "TMP");
  }
}

module.exports = HeartwoodDryad;
