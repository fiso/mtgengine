"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeartwoodTreefolk extends UnimplementedCard {
  constructor (game) {
    super(game, "Heartwood Treefolk", "Tempest", "TMP");
  }
}

module.exports = HeartwoodTreefolk;
