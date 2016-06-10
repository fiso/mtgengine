"use strict";
const Constants = require ("../../../Constants");
const SunastianFalconerBase = require("../setLEG/SunastianFalconer");

class SunastianFalconer extends SunastianFalconerBase {
  constructor (game) {
    super(game, "Sunastian Falconer", "Masters Edition III", "ME3");
  }
}

module.exports = SunastianFalconer;
