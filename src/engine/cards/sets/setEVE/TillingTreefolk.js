"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TillingTreefolk extends UnimplementedCard {
  constructor (game) {
    super(game, "Tilling Treefolk", "Eventide", "EVE");
  }
}

module.exports = TillingTreefolk;
