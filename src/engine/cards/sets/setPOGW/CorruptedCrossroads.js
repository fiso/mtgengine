"use strict";
const Constants = require ("../../../Constants");
const CorruptedCrossroadsBase = require("../setOGW/CorruptedCrossroads");

class CorruptedCrossroads extends CorruptedCrossroadsBase {
  constructor (game) {
    super(game, "Corrupted Crossroads", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = CorruptedCrossroads;
