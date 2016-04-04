"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TowerofFortunesBase = require("../setC13/TowerofFortunes.js");

class TowerofFortunes extends TowerofFortunesBase {
  constructor(game) {
    super(game, "Tower of Fortunes", "Mirrodin", "MRD");
  }
}

module.exports = TowerofFortunes;
