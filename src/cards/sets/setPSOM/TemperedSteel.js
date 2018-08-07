"use strict";
const Constants = require ("../../../Constants");
const TemperedSteelBase = require("../setSOM/TemperedSteel");

class TemperedSteel extends TemperedSteelBase {
  constructor (game) {
    super(game, "Tempered Steel", "Scars of Mirrodin Promos", "PSOM");
  }
}

module.exports = TemperedSteel;
