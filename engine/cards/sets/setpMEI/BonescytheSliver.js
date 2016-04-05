"use strict";
const Constants = require ("../../../Constants");
const BonescytheSliverBase = require("../setM14/BonescytheSliver");

class BonescytheSliver extends BonescytheSliverBase {
  constructor(game) {
    super(game, "Bonescythe Sliver", "Media Inserts", "pMEI");
  }
}

module.exports = BonescytheSliver;
