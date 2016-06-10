"use strict";
const Constants = require ("../../../Constants");
const SatyrWayfinderBase = require("../setBNG/SatyrWayfinder");

class SatyrWayfinder extends SatyrWayfinderBase {
  constructor (game) {
    super(game, "Satyr Wayfinder", "Magic 2015 Core Set", "M15");
  }
}

module.exports = SatyrWayfinder;
