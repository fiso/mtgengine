"use strict";
const Constants = require ("../../../Constants");
const KindredSummonsBase = require("../setC17/KindredSummons");

class KindredSummons extends KindredSummonsBase {
  constructor (game) {
    super(game, "Kindred Summons", "You Make the Cube", "PZ2");
  }
}

module.exports = KindredSummons;
