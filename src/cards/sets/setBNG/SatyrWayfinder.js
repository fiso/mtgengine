"use strict";
const Constants = require ("../../../Constants");
const SatyrWayfinderBase = require("../setCMA/SatyrWayfinder");

class SatyrWayfinder extends SatyrWayfinderBase {
  constructor (game) {
    super(game, "Satyr Wayfinder", "Born of the Gods", "BNG");
  }
}

module.exports = SatyrWayfinder;
