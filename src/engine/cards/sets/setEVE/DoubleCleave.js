"use strict";
const Constants = require ("../../../Constants");
const DoubleCleaveBase = require("../setHOP/DoubleCleave");

class DoubleCleave extends DoubleCleaveBase {
  constructor (game) {
    super(game, "Double Cleave", "Eventide", "EVE");
  }
}

module.exports = DoubleCleave;
