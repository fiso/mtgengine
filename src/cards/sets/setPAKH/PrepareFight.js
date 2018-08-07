"use strict";
const Constants = require ("../../../Constants");
const PrepareFightBase = require("../setAKH/PrepareFight");

class PrepareFight extends PrepareFightBase {
  constructor (game) {
    super(game, "Prepare // Fight", "Amonkhet Promos", "PAKH");
  }
}

module.exports = PrepareFight;
