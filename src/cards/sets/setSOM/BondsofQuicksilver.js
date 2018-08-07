"use strict";
const Constants = require ("../../../Constants");
const BondsofQuicksilverBase = require("../setCN2/BondsofQuicksilver");

class BondsofQuicksilver extends BondsofQuicksilverBase {
  constructor (game) {
    super(game, "Bonds of Quicksilver", "Scars of Mirrodin", "SOM");
  }
}

module.exports = BondsofQuicksilver;
