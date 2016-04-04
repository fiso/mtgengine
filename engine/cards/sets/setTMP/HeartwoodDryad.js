"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeartwoodDryad extends Card {
  constructor(game) {
    super(game, "Heartwood Dryad", "Tempest", "TMP");
  }
}

module.exports = HeartwoodDryad;
