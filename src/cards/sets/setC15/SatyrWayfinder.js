"use strict";
const Constants = require ("../../../Constants");
const SatyrWayfinderBase = require("../setCMA/SatyrWayfinder");

class SatyrWayfinder extends SatyrWayfinderBase {
  constructor (game) {
    super(game, "Satyr Wayfinder", "Commander 2015", "C15");
  }
}

module.exports = SatyrWayfinder;
