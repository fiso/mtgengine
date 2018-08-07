"use strict";
const Constants = require ("../../../Constants");
const SatyrWayfinderBase = require("../setCMA/SatyrWayfinder");

class SatyrWayfinder extends SatyrWayfinderBase {
  constructor (game) {
    super(game, "Satyr Wayfinder", "Magic 2015", "M15");
  }
}

module.exports = SatyrWayfinder;
