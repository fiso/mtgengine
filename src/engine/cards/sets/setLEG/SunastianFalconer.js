"use strict";
const Constants = require ("../../../Constants");
const SunastianFalconerBase = require("../setME3/SunastianFalconer");

class SunastianFalconer extends SunastianFalconerBase {
  constructor (game) {
    super(game, "Sunastian Falconer", "Legends", "LEG");
  }
}

module.exports = SunastianFalconer;
