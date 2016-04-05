"use strict";
const Constants = require ("../../../Constants");
const TowerofFortunesBase = require("../setC13/TowerofFortunes");

class TowerofFortunes extends TowerofFortunesBase {
  constructor(game) {
    super(game, "Tower of Fortunes", "Mirrodin", "MRD");
  }
}

module.exports = TowerofFortunes;
