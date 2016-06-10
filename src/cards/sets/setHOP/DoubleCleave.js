"use strict";
const Constants = require ("../../../Constants");
const DoubleCleaveBase = require("../setEVE/DoubleCleave");

class DoubleCleave extends DoubleCleaveBase {
  constructor (game) {
    super(game, "Double Cleave", "Planechase", "HOP");
  }
}

module.exports = DoubleCleave;
