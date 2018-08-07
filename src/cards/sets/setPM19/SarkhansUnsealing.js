"use strict";
const Constants = require ("../../../Constants");
const SarkhansUnsealingBase = require("../setM19/SarkhansUnsealing");

class SarkhansUnsealing extends SarkhansUnsealingBase {
  constructor (game) {
    super(game, "Sarkhan's Unsealing", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = SarkhansUnsealing;
