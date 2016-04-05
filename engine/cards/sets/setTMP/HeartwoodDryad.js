"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeartwoodDryad extends UnimplementedCard {
  constructor(game) {
    super(game, "Heartwood Dryad", "Tempest", "TMP");
  }
}

module.exports = HeartwoodDryad;
