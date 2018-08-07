"use strict";
const Constants = require ("../../../Constants");
const TributetotheWildBase = require("../setCM2/TributetotheWild");

class TributetotheWild extends TributetotheWildBase {
  constructor (game) {
    super(game, "Tribute to the Wild", "Commander Anthology", "CMA");
  }
}

module.exports = TributetotheWild;
