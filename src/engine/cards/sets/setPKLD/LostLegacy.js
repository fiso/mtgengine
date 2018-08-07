"use strict";
const Constants = require ("../../../Constants");
const LostLegacyBase = require("../setKLD/LostLegacy");

class LostLegacy extends LostLegacyBase {
  constructor (game) {
    super(game, "Lost Legacy", "Kaladesh Promos", "PKLD");
  }
}

module.exports = LostLegacy;
