"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TillingTreefolk extends Card {
  constructor(game) {
    super(game, "Tilling Treefolk", "Eventide", "EVE");
  }
}

module.exports = TillingTreefolk;
