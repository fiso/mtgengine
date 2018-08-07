"use strict";
const Constants = require ("../../../Constants");
const SeaGateWreckageBase = require("../setOGW/SeaGateWreckage");

class SeaGateWreckage extends SeaGateWreckageBase {
  constructor (game) {
    super(game, "Sea Gate Wreckage", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = SeaGateWreckage;
